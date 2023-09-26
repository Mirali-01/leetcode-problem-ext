const leetcodeURL = "leetcode.com";
const envType = "study-plan";
const envId = "leetcode-75";
const studyPlanProblems = [
  "merge-strings-alternately",
  "greatest-common-divisor-of-strings",
  "kids-with-the-greatest-number-of-candies",
  "can-place-flowers",
  "reverse-vowels-of-a-string",
  "reverse-words-in-a-string",
  "product-of-array-except-self",
  "increasing-triplet-subsequence",
  "string-compression",
  "move-zeroes",
  "is-subsequence",
  "container-with-most-water",
  "max-number-of-k-sum-pairs",
  "maximum-average-subarray-i",
  "maximum-number-of-vowels-in-a-substring-of-given-length",
  "max-consecutive-ones-iii",
  "longest-subarray-of-1s-after-deleting-one-element",
  "find-the-highest-altitude",
  "find-pivot-index",
  "find-the-difference-of-two-arrays",
  "unique-number-of-occurrences",
  "determine-if-two-strings-are-close",
  "equal-row-and-column-pairs",
  "removing-stars-from-a-string",
  "asteroid-collision",
  "decode-string",
  "number-of-recent-calls",
  "dota2-senate",
  "delete-the-middle-node-of-a-linked-list",
  "odd-even-linked-list",
  "reverse-linked-list",
  "maximum-twin-sum-of-a-linked-list",
  "maximum-depth-of-binary-tree",
  "leaf-similar-trees",
  "count-good-nodes-in-binary-tree",
  "path-sum-iii",
  "longest-zigzag-path-in-a-binary-tree",
  "lowest-common-ancestor-of-a-binary-tree",
  "binary-tree-right-side-view",
  "maximum-level-sum-of-a-binary-tree",
  "search-in-a-binary-search-tree",
  "delete-node-in-a-bst",
  "keys-and-rooms",
  "number-of-provinces",
  "reorder-routes-to-make-all-paths-lead-to-the-city-zero",
  "evaluate-division",
  "nearest-exit-from-entrance-in-maze",
  "rotting-oranges",
  "kth-largest-element-in-an-array",
  "smallest-number-in-infinite-set",
  "maximum-subsequence-score",
  "total-cost-to-hire-k-workers",
  "guess-number-higher-or-lower",
  "successful-pairs-of-spells-and-potions",
  "find-peak-element",
  "koko-eating-bananas",
  "letter-combinations-of-a-phone-number",
  "combination-sum-iii",
  "n-th-tribonacci-number",
  "min-cost-climbing-stairs",
  "house-robber",
  "domino-and-tromino-tiling",
  "unique-paths",
  "longest-common-subsequence",
  "best-time-to-buy-and-sell-stock-with-transaction-fee",
  "edit-distance",
  "counting-bits",
  "single-number",
  "minimum-flips-to-make-a-or-b-equal-to-c",
  "implement-trie-prefix-tree",
  "search-suggestions-system",
  "non-overlapping-intervals",
  "minimum-number-of-arrows-to-burst-balloons",
  "daily-temperatures",
  "online-stock-span",
];
const randomProblemButton = document.getElementById("randomProblemButton");
const randomProblemTitleElement = document.getElementById("randomProblemTitle");

function getPageTitle() {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    if (tabs && tabs.length > 0) {
      const tab = tabs[0];
      const pageTitle = tab.title;
      if (pageTitle.includes("LeetCode")) {
        randomProblemTitleElement.textContent = pageTitle.replace(
          "- LeetCode",
          ""
        );
      }
    }
  });
}

function redirectToRandomProblem() {
  const randomIndex = Math.floor(Math.random() * studyPlanProblems.length);
  const randomProblem = studyPlanProblems[randomIndex];

  const redirectURL = `https://${leetcodeURL}/problems/${randomProblem}/?envType=${envType}-v2&envId=${envId}`;
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    if (tabs && tabs.length > 0) {
      const tab = tabs[0];
      chrome.tabs.update(tab.id, { url: redirectURL });
    }
  });
}

document.addEventListener("DOMContentLoaded", function () {
  getPageTitle();

  randomProblemButton.addEventListener("click", redirectToRandomProblem);
});
