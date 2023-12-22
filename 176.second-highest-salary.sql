--
-- @lc app=leetcode id=176 lang=mysql
--
-- [176] Second Highest Salary
--

-- @lc code=start
# Write your MySQL query statement below

SELECT COALESCE((SELECT max(salary)  from Employee WHERE salary < (SELECT max(salary) from Employee)),null) as SecondHighestSalary

--  subquery returns the maximum salary, which was excluded from the query later
-- @lc code=end

