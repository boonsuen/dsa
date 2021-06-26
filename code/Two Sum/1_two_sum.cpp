#include <vector>
#include <unordered_map>

using std::vector;
using std::unordered_map;

class Solution
{
public:
  vector<int> twoSum(vector<int> &nums, int target)
  {
    unordered_map<int, int> numsMap;
    vector<int> ans;

    for (int p = 0; p < nums.size(); p++)
    {
      if (numsMap.count(nums[p]) == 1)
      {
        ans.push_back(numsMap[nums[p]]);
        ans.push_back(p);
        return ans;
      }
      else
      {
        numsMap[target - nums[p]] = p;
      }
    }
    return ans;
  }
};