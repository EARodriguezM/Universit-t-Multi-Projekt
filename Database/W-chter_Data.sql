USE [master]
GO
CREATE DATABASE [W-chter_Data]
GO
USE [W-chter_Data]
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
    CONSTRAINT SubjectIdPk PRIMARY KEY ([SubjectId]),
    CONSTRAINT Subject_FacultyIdFk FOREIGN KEY ([FacultyId]) REFERENCES Faculty(FacultyId),
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
    [SemesterLogId] int IDENTITY(1,1) NOT NULL,
    [Description] nvarchar(6) NOT NULL,
    [StartDate] date
    [Status] bit DEFAULT 1 NOT NULL,
    CONSTRAINT SemesterLogPk PRIMARY KEY ([SemesterLogId]),
    CONSTRAINT SemesterLog_DescriptionCk CHECK([Description] LIKE '%-%'),
    CONSTRAINT Subject_StatusCk CHECK([Status] = 1 OR [Status] = 0)
);
GO
SET ANSI_PADDING OFF
GO

-------------------------------ShortLife-------------------------------------------------------
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
    [TagId] varbinary(128) NULL,
	[ProfilePicture] image NOT NULL,
    [IsRegistered] bit NOT NULL,
	[UserTypeId] tinyint NOT NULL,
    CONSTRAINT UserDataPk PRIMARY KEY (UserDataId),
    CONSTRAINT UserData_EmailUk UNIQUE (Email),
    CONSTRAINT UserData_EmailCk CHECK(EMAIL LIKE '%@%.%'),
    CONSTRAINT UserData_TagIdUk UNIQUE (TagId),
    CONSTRAINT UserData_UserTypeIdFk FOREIGN KEY REFERENCES UserType(UserTypeId)
);
GO
SET ANSI_PADDING OFF
GO