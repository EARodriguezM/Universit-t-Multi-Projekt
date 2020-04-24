USE [master]
GO
CREATE DATABASE [W-chter_Login]
GO
USE [W-chter_Login]
GO
-------------------------------------------------------------------------------------------
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [UserLogin](
    [UserLoginId] nvarchar(10) NOT NULL,
	[Username] nvarchar(50) NOT NULL,
	[Password] varbinary(128) NULL,
    [Salt] varbinary(128) NULL,
    [Status] bit NOT NULL,
    CONSTRAINT UserLoginPk PRIMARY KEY (UserLoginId),
    CONSTRAINT UserLoginUsernameUk UNIQUE (Username),  
);
GO
SET ANSI_PADDING OFF
GO