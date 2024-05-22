-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 10, 2024 at 06:29 AM
-- Server version: 10.4.25-MariaDB
-- PHP Version: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `demodatabase`
--

-- --------------------------------------------------------

--
-- Table structure for table `blog`
--

CREATE TABLE `blog` (
  `N_id` int(50) NOT NULL,
  `n_image` varchar(50) DEFAULT NULL,
  `c_name` varchar(150) DEFAULT NULL,
  `c_des` varchar(1500) DEFAULT NULL,
  `p1` varchar(500) DEFAULT NULL,
  `p2` varchar(500) DEFAULT NULL,
  `p3` varchar(500) DEFAULT NULL,
  `p4` varchar(500) DEFAULT NULL,
  `p5` varchar(500) DEFAULT NULL,
  `p6` varchar(500) DEFAULT NULL,
  `p7` varchar(500) DEFAULT NULL,
  `p8` varchar(500) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `blog`
--

INSERT INTO `blog` (`N_id`, `n_image`, `c_name`, `c_des`, `p1`, `p2`, `p3`, `p4`, `p5`, `p6`, `p7`, `p8`) VALUES
(2, 'istockphoto-1397841645-612x612.jpg', 'Back Pain treatment, Exercise for Back Pain relief', 'How often have you felt pain creeping under your shoulder blade? ', 'Especially since working from home became a new norm. Working from almost any room and various postures have led several people to suffer pain in the upper back, particularly pain under the shoulder blade. Juggling work at home and household chores makes us more likely to ignore the correct postures to work in.\r\nWhile pain in the right shoulder blade and left side shoulder blade pain may often be due to straining the muscles in the', 'What causes pain under the shoulder blades?\r\nMusculoskeletal causes\r\nPain under the shoulder blade often arises from muscles, joints, ligaments, tendons, and intervertebral discs. Here are the musculoskeletal causes of pain:\r\nMuscle strain\r\nMuscle strain on the left side shoulder blade pain and right shoulder blade pain can happen due to lifting heavy weights or overuse injuries from overdoing any activity outside your routine. The muscle fibers are loaded beyond their capacity and get injured. ', 'Fracture\r\nFractures can cause pain under the shoulder, right shoulder blade pain and left side shoulder blade pain. The pain may also extend around the shoulder blade, making moving the arm pain. \r\nCervical Disc Herniation\r\nCervical disc herniation causes the \'slipped\' disc to put increased pressure on the neck and the upper back\'s ligaments, nerves, and muscles. The pain is often felt under the shoulder blade due to weakened upper back musculature.\r\nTrauma\r\nAn accident or a fall can cause the s', 'Cardiac causes\r\nThough less common than pain in the chest, pain under the shoulder blade may arise from cardiac causes. The possible reasons for pain in this area may be a heart attack, myocardial infarction, aortic dissection, or pericarditis.\r\nPulmonary causes\r\nPain under the shoulder blade may arise from pulmonary diseases. Conditions like pneumothorax or pulmonary embolism may also cause pain. Lung cancers and Pancoast tumors may also contribute to pain under the shoulder blade.\r\nAbdominal a', 'How to Get shoulder blade pain relief?\r\nRest\r\nShort breaks from postures that cause pain help reduce the strain on the upper back muscles. Sometimes even taking a day off can relieve the pain in the shoulder blades.\r\nCorrect your posture\r\nTo get shoulder blade pain relief and allow the body\'s muscles to work efficiently without causing any strain. Small ergonomic changes to workplaces and household areas go a long way in reducing postural stress.\r\nSupport your back\r\nUsing back supports that help', 'Apply a hot or cold pack\r\nUsing a hot or cold pack temporarily reduces pain or inflammation due to muscle strain in the upper back. Use them for at least ten minutes two to three times a day.\r\nStretching exercises\r\nYou can perform basic upper back stretches to relieve shoulder blade pain in the muscles. Performing basic stretches can also help prevent muscle strain in the upper back.\r\nSeek treatment\r\nPain in the shoulder blade requires a thorough assessment. Seeking treatment is the best way to ', 'How to prevent pain under the shoulder blade?\r\nLearn the correct postures for every task\r\nWhether working from home or cooking in your kitchen, learn the best postures to perform each task. Knowing which poses can relieve shoulder blade pain over your body will help you consciously work toward good postures.\r\nTake regular breaks\r\nRegular breaks every few hours help relieve any strain that may have accumulated in the structures of your body, particularly the postural muscles.\r\nWatch your diet, an', 'A balanced diet with the supplements your body requires will keep your body in the best of health. Muscles fatigue if you are not adequately hydrated or lack essential nutrients. Poor nutrition of muscles and bones makes them more susceptible to injury.\r\nExercise regularly\r\nKeeping an active routine helps your body to maintain the strength and flexibility of your body. Regular exercise, whether yoga, Pilates, swimming, or gym, will contribute towards a healthy lifestyle to keep you pain-free.\r\nW'),
(5, 'Sciatica.jpg', 'What are the symptoms of leg pain?', 'Sometimes, leg pain can signal something more serious. Seek medical attention urgently if you have sore or aching legs.', 'What are the symptoms of leg pain?\r\nLeg pain comes in many different forms. It can affect just a small area of your leg. Or it can cover a wide area. Sometimes the whole leg is in pain. The pain can be in your buttocks or foot. It can be in your lower back or spine.\r\n\r\nYou might also have pain in other parts of your body.\r\n\r\nThe pain can be:\r\n\r\ndull or sharp\r\nburning or tingly', 'Your leg may feel numb.\r\n\r\nOther signs and symptoms that can occur with leg pain are:\r\n\r\nswelling — check if one leg looks different from the other\r\nvaricose veins\r\nsores or ulcers\r\nredness, swelling or warmth\r\nchanges in the colour of your leg or foot\r\na slow healing wound\r\nfeeling generally unwell if you are recovering from an infection or broken leg', 'If your leg pain is sudden, severe, or persistent, you should see a doctor. You should also see a doctor if you have other symptoms as well as leg pain.\r\n\r\nWhat causes leg pain?\r\nHere are some common causes of sore legs:\r\n\r\ncramps\r\nnot using your leg enough\r\nminor injuries — muscle or joint sprains and strains\r\nfractures\r\ninfections — such as cellulitis\r\nYou can also get leg pains when there is something wrong with your body:', 'problems with your blood vessels — such as a blood clot, or poor blood flow\r\nvaricose veins\r\narthritis — gout, osteoarthritis and rheumatoid arthritis\r\nauto-immune problems\r\nproblems with your nerves — such as sciatica\r\nLeg pains in children may be growing pains', 'Muscle problems\r\nCramp — is when your muscles suddenly contract. The pain is normally felt in your calf. It will go away quite quickly by itself. Sometimes leg cramps can happen in pregnancy.\r\n\r\nMuscle sprains and strains — your leg might be very tender and you might have trouble moving your leg. You might also have a muscle spasm or swelling.\r\n\r\nCompartment syndrome — the pain will be very strong and will get worse when you stretch your leg. Your skin may feel tingly, burning or numb. Or your s', 'Leg injuries\r\nNot using your leg enough — you may have pins and needles or muscle stiffness.\r\n\r\nMinor injuries — such as a knock, bump or bruise can cause leg pain. There may be redness, swelling or discolouration at the site of your injury. Surrounding muscles, ligaments and tendons can develop little knots that are very painful.\r\n\r\nFractures — a bone break or crack may cause leg pain, swelling or deformity. It can also cause bruising and loss of power or movement to your leg.\r\n\r\nInfections\r\nUl', 'Problems with blood vessels or nerves\r\nBlood clots (deep vein thrombosis) or poor circulation —may cause swelling, pressure, tenderness or a pale leg.\r\n\r\nVaricose veins — can cause aching, throbbing or burning in your legs. You may also have heaviness, cramping or restless legs. Some people have swollen ankles, darkening of the skin over the veins. You could also get an itchy rash.\r\n\r\nClaudication — is a problem where there is not enough blood flow getting to your muscle due to blocked arteries.', 'Other causes\r\nChronic conditions — like rheumatoid arthritis or gout can cause leg pains.\r\n\r\nJoint problems — pain down the back of the leg can be caused by problems with your:\r\n\r\nankles\r\nknees\r\nhips\r\nback — sciatica'),
(6, 'depositphotos_377013838-stock-photo-psychological-', '', '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `firstname` varchar(50) DEFAULT NULL,
  `lastname` varchar(50) DEFAULT NULL,
  `age` int(50) DEFAULT NULL,
  `username` varchar(50) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `password` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `firstname`, `lastname`, `age`, `username`, `email`, `password`) VALUES
(13, 'maryam', 'raza', NULL, NULL, 'maryamraza@gmail.com', '123'),
(15, '', '', 10, NULL, 'maryamraza738@gmail.com', ''),
(16, 'mr', 'ra', 13, NULL, 'aru@gmail.com', ''),
(17, 'Maryam', 'Raza', 40, NULL, 'maryam@gmail.com', ''),
(18, '9994', '3o3oo', 12, NULL, 'ani@gmail', ''),
(19, 'hiba', 'ghazal', 20, NULL, 'hiba@gmail.com', ''),
(20, 'tab', 'suum', 26, NULL, 'any@gmail.com', ''),
(21, 'taba', 'suum', 26, '', 'any@gmail.com', ''),
(22, 'taba', 'suum', 26, '', 'any@gmail.com', ''),
(23, 'taba', 'suum', 26, '', 'any@gmail.com', ''),
(24, NULL, NULL, NULL, NULL, NULL, NULL),
(25, 'tib', 'suum', 26, 'anything', 'any@gmail.com', ''),
(26, 'tiba', 'suum', 26, 'anything', 'any@gmail.com', ''),
(27, 'tiba', 'suum', 26, 'anything', 'any@gmail.com', ''),
(28, 'kim', 'doli', 500, 'kimlp', 'kin@gmail.com', '123'),
(29, 'maryam', 'raza', 16, 'maryam', 'maryamraza738@gmail.com', '123'),
(30, 'maryam', 'raza', 16, 'maryam', 'maryamraza738@gmail.com', '123'),
(31, 'maryam', 'raza', 16, 'maryam', 'maryamraza738@gmail.com', '123'),
(32, 'maryam', 'raza', 16, 'maryam', 'maryamraza738@gmail.com', '123'),
(33, 'maryam', 'raza', 16, 'maryam', 'maryamraza738@gmail.com', '123'),
(34, 'maryam', 'raza', 16, 'maryam', 'maryamraza738@gmail.com', '321'),
(35, 'm', 'r', 16, 'a', 'maryamraza738@gmail.com', '123'),
(36, 'm', 'r', 16, 'a', 'maryamraza738@gmail.com', '123'),
(37, 'm', 'r', 16, 'a', 'maryamraza738@gmail.com', '123'),
(38, 'm', 'r', 16, 'a', 'maryamraza738@gmail.com', '123');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `blog`
--
ALTER TABLE `blog`
  ADD PRIMARY KEY (`N_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `blog`
--
ALTER TABLE `blog`
  MODIFY `N_id` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=39;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
