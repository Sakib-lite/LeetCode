--
-- @lc app=leetcode id=183 lang=mysql
--
-- [183] Customers Who Never Order
--

-- @lc code=start
# Write your MySQL query statement below

-- SELECT
-- 	c.NAME AS Customers 
-- FROM
-- 	Customers c
-- 	LEFT JOIN Orders o ON c.id = o.customerId 
-- WHERE
-- 	o.id IS NULL

SELECT c.name as Customers FROM `Customers` c WHERE c.id NOT IN (SELECT o.customerId FROM Orders o) 


-- @lc code=end

