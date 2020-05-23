USE [master]
GO
CREATE DATABASE [Wchter_Data]
GO
USE [Wchter_Data]
GO
-------------------------------Structure-------------------------------------------------------
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE Faculty(
    [FacultyId] tinyint IDENTITY(1,1) NOT NULL,
    [Name] nvarchar(100) NOT NULL,
    [Status] bit DEFAULT 1 NOT NULL,
    CONSTRAINT FacultyPk PRIMARY KEY ([FacultyId]),
    CONSTRAINT Faculty_NameUk UNIQUE ([Name]),
    CONSTRAINT Faculty_StatusCk CHECK([Status] = 1 OR [Status] = 0)
);
GO
SET ANSI_PADDING OFF
GO
---------------------------------------------------------
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE Career(
    [CareerId] nvarchar(10) NOT NULL,
    [Name] nvarchar(100) NOT NULL,
    [FacultyId] tinyint NOT NULL,
    [Status] bit DEFAULT 1 NOT NULL,
    CONSTRAINT CareerPk PRIMARY KEY ([CareerId]),
    CONSTRAINT Career_FacultyIdFk FOREIGN KEY ([FacultyId]) REFERENCES Faculty(FacultyId),
    CONSTRAINT Career_NameUk UNIQUE ([Name]),
    CONSTRAINT Career_StatusCk CHECK([Status] = 1 OR [Status] = 0)
);
GO
SET ANSI_PADDING OFF
GO
---------------------------------------------------------
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [Subject](
    [SubjectId] nvarchar(7) NOT NULL,
    [Name] nvarchar(100) NOT NULL,
    [Status] bit DEFAULT 1 NOT NULL,
    CONSTRAINT SubjectPk PRIMARY KEY ([SubjectId]),
    CONSTRAINT Subject_StatusCk CHECK([Status] = 1 OR [Status] = 0)
);
GO
SET ANSI_PADDING OFF
GO
---------------------------------------------------------
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [SemesterLog](
    [SemesterId] int IDENTITY(1,1) NOT NULL,
    [Description] nvarchar(6) NOT NULL,
    [StartDate] date NOT NULL,
    [EndDate] date NOT NULL,
    [Status] bit DEFAULT 1 NOT NULL,
    CONSTRAINT SemesterLogPk PRIMARY KEY ([SemesterId]),
    CONSTRAINT SemesterLog_DescriptionCk CHECK([Description] LIKE '%-%'),
    CONSTRAINT SemesterLog_StatusCk CHECK([Status] = 1 OR [Status] = 0),
    CONSTRAINT SemesterLog_DateVerificationCk CHECK([StartDate]<[EndDate] AND (MONTH([EndDate])-MONTH([StartDate]))>4)
);
GO
SET ANSI_PADDING OFF
GO
---------------------------------------------------------
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [R_CareerSubject](
    [CareerId] nvarchar(10) NOT NULL,
    [SubjectId] nvarchar(7) NOT NULL,
    [Status] bit DEFAULT 1 NOT NULL,
    CONSTRAINT R_CareerSubject_CareerIdFk FOREIGN KEY ([CareerId]) REFERENCES Career(CareerId),
    CONSTRAINT R_CareerSubject_SubjectIdFk FOREIGN KEY ([SubjectId]) REFERENCES Subject(SubjectId),
    CONSTRAINT R_CareerSubject_StatusCk CHECK([Status] = 1 OR [Status] = 0)
);
GO
SET ANSI_PADDING OFF
GO

-------------------------------Persons-------------------------------------------------------
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [UserType](
	[UserTypeId] tinyint NOT NULL,
	[Description] nvarchar(20) NOT NULL,
    [Status] bit NOT NULL,
    CONSTRAINT UserTypePk PRIMARY KEY (UserTypeId),
    CONSTRAINT UserType_DescriptionUk UNIQUE ([Description]),
    CONSTRAINT UserType_StatusCk CHECK([Status] = 1 OR [Status] = 0)
);
GO
SET ANSI_PADDING OFF
GO
---------------------------------------------------------
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [UserData](
	[UserDataId] nvarchar(10) NOT NULL,
	[FirstName] nvarchar(50) NOT NULL,
    [SecondName] nvarchar(50) NOT NULL,
	[FirstSurname] nvarchar(50) NOT NULL,
	[SecondSurname] nvarchar(50) NOT NULL,
	[Email] nvarchar(50) NOT NULL,
	[ProfilePicture] image NOT NULL,
    [IsRegistered] bit NOT NULL,
	[UserTypeId] tinyint NOT NULL,
    [Status] bit DEFAULT 1 NOT NULL,
    CONSTRAINT UserDataPk PRIMARY KEY (UserDataId),
    CONSTRAINT UserData_EmailUk UNIQUE (Email),
    CONSTRAINT UserData_EmailCk CHECK(EMAIL LIKE '%@%.%'),
    CONSTRAINT UserData_UserTypeIdFk FOREIGN KEY ([UserTypeId])  REFERENCES UserType(UserTypeId),
    CONSTRAINT UserData_StatusCk CHECK([Status] = 1 OR [Status] = 0)
);
GO
SET ANSI_PADDING OFF
GO
---------------------------------------------------------
---------------------------------
CREATE FUNCTION IsTeacher(
    @UserDataId nvarchar(10)
)
RETURNS INT
AS
BEGIN
    RETURN (SELECT TOP 1 UserTypeId 
    FROM UserData
    WHERE UserDataId = @UserDataId
    ORDER BY UserTypeId ASC)
END
GO
---------------------------------
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [R_TeacherSubject](
	[UserDataId] nvarchar(10) NOT NULL,
    [SubjectId] nvarchar(7) NOT NULL,
    [SemesterId] int NOT NULL,
    [Status] bit DEFAULT 1 NOT NULL,
    CONSTRAINT R_TeacherSubject_UserDataIdFk FOREIGN KEY ([UserDataId]) REFERENCES UserData(UserDataId),
    CONSTRAINT R_TeacherSubject_SubjectIdFk FOREIGN KEY ([SubjectId]) REFERENCES Subject(SubjectId),
    CONSTRAINT R_TeacherSubject_SemesterIdFk FOREIGN KEY ([SemesterId]) REFERENCES SemesterLog(SemesterId),
    CONSTRAINT R_TeacherSubject_StatusCk CHECK([Status] = 1 OR [Status] = 0)
);
GO
SET ANSI_PADDING OFF
GO
ALTER TABLE [R_TeacherSubject]
ADD CONSTRAINT R_TeacherSubject_IsTeacher CHECK(dbo.IsTeacher(UserDataId) BETWEEN 2 AND 3)
GO
---------------------------------------------------------
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [Tag](
	[TagId] int IDENTITY(1,1) NOT NULL,
	[UserDataId] nvarchar(10) NOT NULL,
    [Tag] nvarchar(45) NOT NULL,
    [Status] bit DEFAULT 1 NOT NULL,
    CONSTRAINT TagPk PRIMARY KEY ([TagId]),
    CONSTRAINT Tag_UserDataIdFk FOREIGN KEY ([UserDataId]) REFERENCES UserData(UserDataId),
    CONSTRAINT Tag_StatusCk CHECK([Status] = 1 OR [Status] = 0),
);
GO
SET ANSI_PADDING OFF
GO

-------------------------------Devices-------------------------------------------------------

SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [Classroom](
    [ClassroomId] int IDENTITY(1,1) NOT NULL,
    [Description] nvarchar(45) NOT NULL,
    [Block] nvarchar(15) NOT NULL,
    [Room] nvarchar(3) NOT NULL, /*Tres digitos, el que indica el piso y el numero de salon*/
    [Status] bit DEFAULT 1 NOT NULL,
    CONSTRAINT ClassroomPk PRIMARY KEY ([ClassroomId]),
    CONSTRAINT Classroom_StatusCk CHECK([Status] = 1 OR [Status] = 0),
);
GO
SET ANSI_PADDING OFF
GO
---------------------------------------------------------
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [Device](
    [DeviceId] int IDENTITY(1,1) NOT NULL,
    [Description] varchar(45) NOT NULL,
    [ClassroomId] int NOT NULL,
    [Status] bit DEFAULT 1 NOT NULL,
    CONSTRAINT DevicePk PRIMARY KEY ([DeviceId]),
    CONSTRAINT Device_ClassroomIdFk FOREIGN KEY ([ClassroomId]) REFERENCES Classroom(ClassroomId),
    CONSTRAINT Device_StatusCk CHECK([Status] = 1 OR [Status] = 0),
)
