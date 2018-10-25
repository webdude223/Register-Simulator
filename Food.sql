-- phpMyAdmin SQL Dump
-- version 4.4.15.7
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Oct 10, 2018 at 02:19 PM
-- Server version: 5.6.36
-- PHP Version: 5.3.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ALDI`
--

-- --------------------------------------------------------

--
-- Table structure for table `Food`
--

CREATE TABLE IF NOT EXISTS `Food` (
  `FID` int(12) NOT NULL,
  `Description` varchar(20) NOT NULL,
  `NLU` varchar(2) DEFAULT NULL COMMENT 'only common items have a short cut code',
  `UPC` varchar(12) NOT NULL,
  `Smart_Code` varchar(5) NOT NULL COMMENT 'abbreviated code for entry',
  `ID_Verification` int(1) NOT NULL COMMENT 'BOOL 1 = True 0 = False (ID for alcohol)',
  `Type` varchar(2) NOT NULL COMMENT 'Food or Product (FB/NC)',
  `Full_Price` int(11) NOT NULL COMMENT 'item normal price',
  `Sale_Price` int(11) DEFAULT NULL COMMENT 'Item sale price',
  `Sale_Active` int(1) NOT NULL COMMENT 'Is item on sale? (BOOL)',
  `Is_Weighed` int(1) NOT NULL COMMENT 'Is item sold by weight? (BOOL)',
  `Inventory` int(11) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Food`
--

INSERT INTO `Food` (`FID`, `Description`, `NLU`, `UPC`, `Smart_Code`, `ID_Verification`, `Type`, `Full_Price`, `Sale_Price`, `Sale_Active`, `Is_Weighed`, `Inventory`) VALUES
(1, 'Corn on Cobb', NULL, '45642321968', '56895', 0, 'FB', 1, 1, 0, 0, 500),
(3, 'Red Grapes', '76', '456432165456', '12214', 0, 'FB', 2, 1, 0, 1, 522),
(4, 'Miller Lite', NULL, '456123789852', '45621', 1, 'AF', 10, 8, 1, 0, 22),
(5, 'Athena Cantalope', '1', '298477382901', '23990', 0, 'FB', 2, 1, 0, 0, 328),
(6, 'Cucumbers', '2', '299837473829', '33376', 0, 'FB', 0, 0, 0, 0, 198),
(7, 'Papaya', '3', '988938475893', '77823', 0, 'FB', 4, 3, 0, 0, 20),
(8, 'Pumpkin', '4', '20902928394', '29009', 0, 'FB', 2, 1, 1, 0, 23),
(9, 'Avacado', '5', '299485749020', '39982', 0, 'FB', 1, 0, 0, 0, 1200);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Food`
--
ALTER TABLE `Food`
  ADD PRIMARY KEY (`FID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `Food`
--
ALTER TABLE `Food`
  MODIFY `FID` int(12) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=10;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
