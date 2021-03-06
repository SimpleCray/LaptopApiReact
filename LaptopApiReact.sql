CREATE DATABASE LaptopApiReactDB
GO
USE [LaptopApiReactDB]
GO
/****** Object:  Table [dbo].[Laptop]    Script Date: 01-Jan-21 1:04:15 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Laptop](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[name] [varchar](100) NULL,
	[supplier] [varchar](100) NULL,
	[price] [int] NULL,
	[imgName] [varchar](100) NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[Laptop] ON 

INSERT [dbo].[Laptop] ([id], [name], [supplier], [price], [imgName]) VALUES (1, N'Alienware Area 51', N'Dell', 3900, N'51AzxRkBIO201337350.jpg')
INSERT [dbo].[Laptop] ([id], [name], [supplier], [price], [imgName]) VALUES (2, N'Aspire 5 Nitro', N'Acer', 2400, N'23689_acer201504389.jpg')
INSERT [dbo].[Laptop] ([id], [name], [supplier], [price], [imgName]) VALUES (3, N'Legion y530', N'Lenovo', 1600, N'legion201524078.jpg')
INSERT [dbo].[Laptop] ([id], [name], [supplier], [price], [imgName]) VALUES (4, N'ROG Strix ZX8CL', N'Asus', 1600, N'G531GD-05-201538553.jpg')
INSERT [dbo].[Laptop] ([id], [name], [supplier], [price], [imgName]) VALUES (5, N'TUF Gaming a15', N'Asus', 1200, N'34-235-421201720707.jpg')
INSERT [dbo].[Laptop] ([id], [name], [supplier], [price], [imgName]) VALUES (6, N'HP Omen 17', N'HP', 1300, N'1592227247201731676.jpg')
INSERT [dbo].[Laptop] ([id], [name], [supplier], [price], [imgName]) VALUES (7, N'Thinkpad x390', N'Lenovo', 2600, N'Lenovo-Thi201753312.jpg')
INSERT [dbo].[Laptop] ([id], [name], [supplier], [price], [imgName]) VALUES (8, N'Macbook Pro M1', N'Apple', 3500, N'GfinEMFXnT201800173.jpg')
GO
