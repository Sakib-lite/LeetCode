--
-- @lc app=leetcode id=175 lang=mysql
--
-- [175] Combine Two Tables
--

-- @lc code=start
# Write your MySQL query statement below
SELECT p.firstname,p.lastname,ad.city,ad.state FROM Person as p LEFT JOIN Address as ad ON p.personId=ad.personId
-- @lc code=end

