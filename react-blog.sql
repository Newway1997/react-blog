/*
 Navicat Premium Data Transfer

 Source Server         : aliyun
 Source Server Type    : MySQL
 Source Server Version : 50721
 Source Host           : 112.74.35.49:3306
 Source Schema         : react-blog

 Target Server Type    : MySQL
 Target Server Version : 50721
 File Encoding         : 65001

 Date: 12/03/2020 12:25:44
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for account
-- ----------------------------
DROP TABLE IF EXISTS `account`;
CREATE TABLE `account`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `account` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  `userId` int(11) NULL DEFAULT NULL,
  `icon` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  `description` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 8 CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of account
-- ----------------------------
INSERT INTO `account` VALUES (5, 'https://github.com/', 1, 'GithubOutlined', 'github');
INSERT INTO `account` VALUES (7, 'https://weibo.com/', 1, 'WeiboOutlined', 'weibo');

-- ----------------------------
-- Table structure for admin_user
-- ----------------------------
DROP TABLE IF EXISTS `admin_user`;
CREATE TABLE `admin_user`  (
  `id` int(11) NOT NULL,
  `userName` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `password` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `typeId` int(11) NULL DEFAULT NULL,
  `avatar` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `introduction` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of admin_user
-- ----------------------------
INSERT INTO `admin_user` VALUES (1, 'root', '123456', 0, 'http://112.74.35.49:7001/public/uploads/images/d0071cf90ef82e8b2297f3e655c09bbb.png', '一个前端');

-- ----------------------------
-- Table structure for advert
-- ----------------------------
DROP TABLE IF EXISTS `advert`;
CREATE TABLE `advert`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userId` int(11) NULL DEFAULT NULL,
  `advert` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 8 CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of advert
-- ----------------------------
INSERT INTO `advert` VALUES (7, NULL, 'http://112.74.35.49:7001/public/uploads/images/f5728b4e8b3ff1a26790dcccd9a2c958.jpg');

-- ----------------------------
-- Table structure for article
-- ----------------------------
DROP TABLE IF EXISTS `article`;
CREATE TABLE `article`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `type_id` int(11) NOT NULL,
  `title` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `article_content` text CHARACTER SET utf8 COLLATE utf8_general_ci NULL,
  `introduce` text CHARACTER SET utf8 COLLATE utf8_general_ci NULL,
  `addTime` int(11) NULL DEFAULT NULL,
  `view_count` int(11) NULL DEFAULT 0,
  `orderIndex` int(11) NULL DEFAULT 1,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 14 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of article
-- ----------------------------
INSERT INTO `article` VALUES (1, 3, '当你心情不好时…', ' ## 学会沉默 \n有时候，你被人误解，你不想争辩，所以选择沈默。本来就不是所有的人都得了解你，因此你认为不必对全世界喊话。却也有时候，你被最爱的人误解，你难过到不想争辩，也只有选择沈默。全世界都可以不懂你，但他应该懂，若他竟然不能懂，还有什么话可说?生命中往往有连舒伯特都无言以对的时刻，毕竟不是所有的是非都能条列清楚，甚至可能根本没有真正的是与非。那么，不想说话，就不说吧，在多说无益的时候，也许沈默就是最好的解释。', '有时候，你被人误解，你不想争辩，所以选择沈默。本来就不是所有的人都得了解你，因此你认为不必对全世界喊话。', 1583510400, 110, 0);
INSERT INTO `article` VALUES (7, 3, '你不可能让所有人都满意', '## 你不可能让所有人都满意\n每个人都会有他个人的感觉，都会根据自己的想法来看待世界。所以，不要试图让所有的人都对你满意，否则你将永远也得不到快乐。\n\n你不可能让所有人都满意，把事做好。从前有一位画家，想画出一幅人人见了都喜欢的画。经过几个月的辛苦工作。他把画好的作品拿到市场上去，在画旁放了一支笔，并附上一则说明：亲爱的朋友，如果你认为这幅画哪里有欠佳之笔，请赐教，并在画中作上标记。', '每个人都会有他个人的感觉，都会根据自己的想法来看待世界。所以，不要试图让所有的人都对你满意，否则你将永远也得不到快乐。', 1583856000, 0, 1);
INSERT INTO `article` VALUES (8, 1, '谢谢你来过', '## 一生中至少该有一次\n徐志摩曾说过：“一生中至少该有一次，为了某个人而忘记了自己，不求结果，不求同行，不求曾经拥有，甚至不求你爱我，只求在我最美的年华里，遇见你。”我不知道自己是何等的幸运能在茫茫人海中与你相遇？我也不知道你的出现是恩赐还是劫？但总归要说声“谢谢你，谢谢你曾来过……”', '一生中至少该有一次，为了某个人而忘记了自己，不求结果，不求同行，不求曾经拥有，甚至不求你爱我，只求在我最美的年华里，遇见你。', 1583078400, 2, 1);
INSERT INTO `article` VALUES (9, 2, '初入佛门', '九十年代中期，我在韶关的曲江县工作，时常陪同同事或朋友去南华寺游览。多年的所见所闻，感觉为数不少的人去拜佛仅仅是为了保平安、保发财、保健康，尤其是一些年轻人，他们认为拜佛只是为了给自己带来一点现世的安乐和心灵的安慰，只知道祈愿求福。而真正信仰佛的人，拜佛或学佛的目的就是为了开发个人生命内在的智慧，就是为了减轻烦恼。', '初入佛门', 1583856000, 1, 1);
INSERT INTO `article` VALUES (10, 1, '友谊天长地久', ' # 友谊天长地久\n　　不论在生活中还是网络里，人人都会有朋友。如果没有朋友情，生活就不会有悦耳的和音，就如死水一滩；友情无处不在，它伴随你左右，萦绕在你身边，和你共渡一生。\n\n　　友情，是雨季中的一把小伞，它撑起了一个晴朗的天空；友情，是风雪之夜的一杯淡茶，它能将寒意驱走，带来温暖；友情，是迷途中的一盏灯，它在你迷失时给你方向……人生漫漫，若能拥有一段地久天长的相知相伴的友情，生命亦无憾。\n\n　　 大千世界，红尘滚滚，一年又一年的风风雨雨，几许微笑，几丝忧伤，随着时间小河的流淌，许多人和事都付之东流去。但有一种人却随着时间的推移，你与ta的交往，如陈年酒香，沁人心肺。你与ta的友情是世上最珍贵的情感。这种友情是一种最纯洁、最高尚、最朴素、最平凡的感情。也是最浪漫、最动人、最坚实、最永恒的情感。', '友谊天长地久', 1585411200, 5, 1);

-- ----------------------------
-- Table structure for type
-- ----------------------------
DROP TABLE IF EXISTS `type`;
CREATE TABLE `type`  (
  `id` int(11) NOT NULL,
  `typeName` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `orderNum` int(11) NOT NULL,
  `icon` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of type
-- ----------------------------
INSERT INTO `type` VALUES (1, '小结', 2, 'HighlightOutlined');
INSERT INTO `type` VALUES (2, '笔记', 3, 'CopyOutlined');
INSERT INTO `type` VALUES (3, '文章', 1, 'SnippetsOutlined');

SET FOREIGN_KEY_CHECKS = 1;
