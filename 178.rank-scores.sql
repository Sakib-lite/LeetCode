--
-- @lc app=leetcode id=178 lang=mysql
--
-- [178] Rank Scores
--

-- @lc code=start
# Write your MySQL query statement below

SELECT
	ROUND(score*1.00,2) as score,
	DENSE_RANK() over ( ORDER BY score DESC ) AS rank
FROM
	Scores 
ORDER BY
	score DESC

-- @lc code=end

