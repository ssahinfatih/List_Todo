USE [master]
GO
/****** Object:  Table [dbo].[account]    Script Date: 27.09.2022 14:57:03 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[account](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[name] [varchar](50) NULL,
	[surname] [varchar](50) NULL,
	[phone] [varchar](11) NULL,
	[email] [varchar](99) NULL,
	[username] [varchar](25) NULL,
	[password] [varchar](25) NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[contents]    Script Date: 27.09.2022 14:57:03 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[contents](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[contents] [varchar](256) NULL
) ON [PRIMARY]
GO
