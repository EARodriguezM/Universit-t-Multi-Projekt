USE [master]
GO
CREATE DATABASE [UsersData]
GO
USE [UsersData]
GO
-------------------------------------------------------------------------------------------
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [User](
    [UserId] nvarchar(10) NOT NULL,
    [FirstName] nvarchar(50) NOT NULL,
    [SecondName] nvarchar(50) NOT NULL,
	[FirstSurname] nvarchar(50) NOT NULL,
	[SecondSurname] nvarchar(50) NOT NULL,
    [Username] nvarchar(50) NOT NULL,
	[PasswordHash] varbinary(128) NULL,
    [PasswordSalt] varbinary(128) NULL,
	[EmailPersonal] nvarchar(50) NOT NULL,
	[ProfilePicture] image NULL,
    [IsActivated] bit DEFAULT 0 NOT NULL,
    [Status] bit DEFAULT 1 NOT NULL,
    CONSTRAINT UserPk PRIMARY KEY (UserId),
    CONSTRAINT User_UsernameUk UNIQUE (Username),
    CONSTRAINT User_EmailUk UNIQUE (EmailPersonal),
    CONSTRAINT User_EmailCk CHECK(EmailPersonal LIKE '%@%.%'),
    CONSTRAINT User_IsActivatedCk CHECK([IsActivated] = 1 OR [IsActivated] = 0),
    CONSTRAINT User_StatusCk CHECK([Status] = 1 OR [Status] = 0) 
);
GO
SET ANSI_PADDING OFF
GO