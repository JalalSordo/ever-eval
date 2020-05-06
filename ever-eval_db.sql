-- MySQL dump 10.13  Distrib 8.0.16, for Win64 (x86_64)
--
-- Host: localhost    Database: ever_eval
-- ------------------------------------------------------
-- Server version	8.0.16

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
 SET NAMES utf8 ;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `answer`
--

DROP TABLE IF EXISTS `answer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `answer` (
  `id_ans` int(11) NOT NULL AUTO_INCREMENT,
  `score` decimal(10,0) NOT NULL,
  `id_qst` int(11) NOT NULL,
  `id_quiz` int(11) NOT NULL,
  `id_cand` int(11) NOT NULL,
  PRIMARY KEY (`id_ans`),
  KEY `fk_answer_quiz_idx` (`id_quiz`),
  KEY `fk_answer_question_idx` (`id_qst`),
  KEY `fk_answer_condidate_idx` (`id_cand`),
  CONSTRAINT `fk_answer_condidate` FOREIGN KEY (`id_cand`) REFERENCES `candidate` (`id_cand`),
  CONSTRAINT `fk_answer_question` FOREIGN KEY (`id_qst`) REFERENCES `question` (`id_qst`),
  CONSTRAINT `fk_answer_quiz` FOREIGN KEY (`id_quiz`) REFERENCES `quiz` (`id_quiz`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `answer`
--

LOCK TABLES `answer` WRITE;
/*!40000 ALTER TABLE `answer` DISABLE KEYS */;
/*!40000 ALTER TABLE `answer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `candidate`
--

DROP TABLE IF EXISTS `candidate`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `candidate` (
  `id_cand` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `mail` varchar(45) NOT NULL,
  `level` enum('CJ','CD','CSD','CLD') NOT NULL,
  `techno` enum('JAVAEE','DOTNET','SAP') NOT NULL,
  PRIMARY KEY (`id_cand`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `candidate`
--

LOCK TABLES `candidate` WRITE;
/*!40000 ALTER TABLE `candidate` DISABLE KEYS */;
/*!40000 ALTER TABLE `candidate` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `proposed-response`
--

DROP TABLE IF EXISTS `proposed-response`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `proposed-response` (
  `id_rep` int(11) NOT NULL AUTO_INCREMENT,
  `content` varchar(45) NOT NULL,
  `state` tinyint(4) NOT NULL,
  `id_qst` int(11) NOT NULL,
  PRIMARY KEY (`id_rep`),
  KEY `id_qst_idx` (`id_qst`),
  CONSTRAINT `fk_propose_responses_question` FOREIGN KEY (`id_qst`) REFERENCES `question` (`id_qst`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `proposed-response`
--

LOCK TABLES `proposed-response` WRITE;
/*!40000 ALTER TABLE `proposed-response` DISABLE KEYS */;
/*!40000 ALTER TABLE `proposed-response` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `question`
--

DROP TABLE IF EXISTS `question`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `question` (
  `id_qst` int(11) NOT NULL AUTO_INCREMENT,
  `content` varchar(45) NOT NULL,
  `level` enum('CJ','CD','CSD','CLD') NOT NULL,
  `techno` enum('JAVAEE','DOTNET','SAP') NOT NULL,
  `TYPE` enum('RADIO','CHECKBOX','TEXTFIELD','TEXTAREA') NOT NULL,
  PRIMARY KEY (`id_qst`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `question`
--

LOCK TABLES `question` WRITE;
/*!40000 ALTER TABLE `question` DISABLE KEYS */;
/*!40000 ALTER TABLE `question` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `quiz`
--

DROP TABLE IF EXISTS `quiz`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `quiz` (
  `id_quiz` int(11) NOT NULL AUTO_INCREMENT,
  `id_staf` int(11) NOT NULL,
  `level` enum('CJ','CD','CSD','CLD') NOT NULL,
  `techno` enum('JAVAEE','DOTNET','SAP') NOT NULL,
  `id_qst` int(11) NOT NULL,
  `id_cand` int(11) NOT NULL,
  PRIMARY KEY (`id_quiz`),
  KEY `fk_quiz_question_idx` (`id_qst`),
  KEY `fk_quiz_candidate_idx` (`id_cand`),
  KEY `fk_quiz_staff_idx` (`id_staf`),
  CONSTRAINT `fk_quiz_candidate` FOREIGN KEY (`id_cand`) REFERENCES `candidate` (`id_cand`),
  CONSTRAINT `fk_quiz_question` FOREIGN KEY (`id_qst`) REFERENCES `question` (`id_qst`) ON DELETE CASCADE,
  CONSTRAINT `fk_quiz_staff` FOREIGN KEY (`id_staf`) REFERENCES `staff` (`id_staf`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `quiz`
--

LOCK TABLES `quiz` WRITE;
/*!40000 ALTER TABLE `quiz` DISABLE KEYS */;
/*!40000 ALTER TABLE `quiz` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `staff`
--

DROP TABLE IF EXISTS `staff`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `staff` (
  `id_staf` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `mail` varchar(45) NOT NULL,
  `role` enum('RH','EVALUATOR') NOT NULL,
  `password` varchar(45) NOT NULL,
  PRIMARY KEY (`id_staf`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `staff`
--

LOCK TABLES `staff` WRITE;
/*!40000 ALTER TABLE `staff` DISABLE KEYS */;
/*!40000 ALTER TABLE `staff` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-05-29 17:13:58
