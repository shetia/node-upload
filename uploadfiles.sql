/*
Navicat MySQL Data Transfer

Source Server         : local
Source Server Version : 80017
Source Host           : localhost:3306
Source Database       : abc

Target Server Type    : MYSQL
Target Server Version : 80017
File Encoding         : 65001

Date: 2019-09-25 08:31:56
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `uploadfiles`
-- ----------------------------
DROP TABLE IF EXISTS `uploadfiles`;
CREATE TABLE `uploadfiles` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `fieldname` char(255) DEFAULT NULL,
  `encoding` char(255) DEFAULT NULL,
  `tmpName` char(255) DEFAULT NULL,
  `originalName` char(255) DEFAULT NULL,
  `mimetype` char(255) DEFAULT NULL,
  `size` int(11) DEFAULT NULL,
  `path` char(255) DEFAULT NULL,
  `tmpPath` char(255) DEFAULT NULL,
  `addTime` char(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=35 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of uploadfiles
-- ----------------------------
INSERT INTO `uploadfiles` VALUES ('21', 'file', '7bit', 'dee0e421aba725a218928b7e7a1740bf', 'dissatisfied_gray.png', 'image/png', '4075', 'C:\\Users\\wxj\\Desktop\\upload/uploadFiles/file/dissatisfied_gray.png', 'C:\\Users\\wxj\\Desktop\\upload/uploadFiles\\tmp\\dee0e421aba725a218928b7e7a1740bf', '2019-09-24T07:52:28.451Z');
INSERT INTO `uploadfiles` VALUES ('23', 'file', '7bit', '884a95184a9c7e73906723bdd018c838', 'dissatisfied_gray.png', 'image/png', '4075', 'C:\\Users\\wxj\\Desktop\\upload/uploadFiles/file/dissatisfied_gray.png', 'C:\\Users\\wxj\\Desktop\\upload/uploadFiles\\tmp\\884a95184a9c7e73906723bdd018c838', '2019-09-24T08:06:41.699Z');
INSERT INTO `uploadfiles` VALUES ('26', 'file', '7bit', '1a208d18666de1ea28d25ecec29aba8e', 'dissatisfied.png', 'image/png', '3635', 'C:\\Users\\wxj\\Desktop\\upload/uploadFiles/file/dissatisfied.png', 'C:\\Users\\wxj\\Desktop\\upload/uploadFiles\\tmp\\1a208d18666de1ea28d25ecec29aba8e', '2019-09-24T08:13:07.081Z');
INSERT INTO `uploadfiles` VALUES ('27', 'file', '7bit', '73639953a92cf5a3773d915a4dfe9545', 'satisfied_gray.png', 'image/png', '4336', 'C:\\Users\\wxj\\Desktop\\upload/uploadFiles/file/satisfied_gray.png', 'C:\\Users\\wxj\\Desktop\\upload/uploadFiles\\tmp\\73639953a92cf5a3773d915a4dfe9545', '2019-09-24T08:13:50.586Z');
INSERT INTO `uploadfiles` VALUES ('28', 'file', '7bit', '1b90c23a222ec13b8306a02a4ae9e6de', 'dissatisfied_gray.png', 'image/png', '4075', 'C:\\Users\\wxj\\Desktop\\upload/uploadFiles/file/dissatisfied_gray.png', 'C:\\Users\\wxj\\Desktop\\upload/uploadFiles\\tmp\\1b90c23a222ec13b8306a02a4ae9e6de', '2019-09-24T08:14:09.465Z');
INSERT INTO `uploadfiles` VALUES ('30', 'file', '7bit', 'cafc6510b4d2c94c853c8e8ed24ec3b9', 'dissatisfied.png', 'image/png', '3635', 'C:\\Users\\wxj\\Desktop\\upload/uploadFiles/file/dissatisfied.png', 'C:\\Users\\wxj\\Desktop\\upload/uploadFiles\\tmp\\cafc6510b4d2c94c853c8e8ed24ec3b9', '2019-09-24T08:23:45.060Z');
INSERT INTO `uploadfiles` VALUES ('31', 'file', '7bit', '7b596da9a6032a42072b81fb38868a56', 'dissatisfied_gray.png', 'image/png', '4075', 'C:\\Users\\wxj\\Desktop\\upload/uploadFiles/file/dissatisfied_gray.png', 'C:\\Users\\wxj\\Desktop\\upload/uploadFiles\\tmp\\7b596da9a6032a42072b81fb38868a56', '2019-09-24T08:42:27.946Z');
INSERT INTO `uploadfiles` VALUES ('32', 'file', '7bit', '047dd8f1eb69c40b297b905edac52e1a', '11.jpg', 'image/jpeg', '1005812', 'C:\\Users\\wxj\\Desktop\\upload/uploadFiles/file/11.jpg', 'C:\\Users\\wxj\\Desktop\\upload/uploadFiles\\tmp\\047dd8f1eb69c40b297b905edac52e1a', '2019-09-24T09:24:20.833Z');
INSERT INTO `uploadfiles` VALUES ('33', 'file', '7bit', '1ced8d612d38a1f59633f7ec7fa1ba9f', 'pp.1.480c7fbe.jpg', 'image/jpeg', '15370', 'D:\\demo\\node\\node-upload/uploadFiles/file/pp.1.480c7fbe.jpg', 'D:\\demo\\node\\node-upload/uploadFiles\\tmp\\1ced8d612d38a1f59633f7ec7fa1ba9f', '2019-09-25T00:29:56.205Z');
INSERT INTO `uploadfiles` VALUES ('34', 'file', '7bit', '44e81b8897541fedf6c46f58826feee5', 'agen.jpg', 'image/jpeg', '154520', 'D:\\demo\\node\\node-upload/uploadFiles/file/agen.jpg', 'D:\\demo\\node\\node-upload/uploadFiles\\tmp\\44e81b8897541fedf6c46f58826feee5', '2019-09-25T00:30:44.774Z');
