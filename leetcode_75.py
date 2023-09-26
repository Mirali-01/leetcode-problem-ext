from bs4 import BeautifulSoup
from selenium import webdriver
import re
import time
import json

url = "https://leetcode.com/studyplan/leetcode-75/"
driver = webdriver.Chrome()
driver.get(url)

time.sleep(5)

html = driver.page_source
soup = BeautifulSoup(html, "html.parser")
problem_titles = soup.find_all(class_="css-rq2fok")

formatted_problems = []

for problem in problem_titles:
    problem = problem.text.lower()
    formatted_problem = re.sub(r"[^a-zA-Z0-9-]", "", problem.replace(" ", "-"))
    formatted_problems.append(formatted_problem)

driver.close()

formatted_problems_json = json.dumps(formatted_problems)

print(formatted_problems_json)
