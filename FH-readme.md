# Social Tables Front End Intern Challenge

## Instructions

```bash
git clone git@github.com:LaFrish/drawing-app-challenge.git
cd drawing-app-challenge
npm install
npm start
Open [http://localhost:3000](http://localhost:3000)
```
---

## Challenge walkthrough

**NOTE:**
<strong> BeforeEach hook:</strong>
Altered BeforeEach hook because the findElement portion was specific to Test 0.

<strong> After hook:</strong>
After hook errors were leading to complications. I was able to find a resolve with by adjusting code.

<details>
<summary><strong> The Social Tables logo in the top left should link to <https://www.socialtables.com/>.</strong></summary>

  > This was a tricky test in the beginning. I first was concerned because the actual site that the logo was linked to on the help page was <http://socialtables.digihey.com/> but I did testing with both links and <http://socialtables.com/> . After searching, I found this [StackOverFlow question](http://stackoverflow.com/questions/32529095/how-can-i-get-the-locator-value-from-a-webelement) the most helpful for myself.

</details>


<details>
<summary><strong> Searching for `Bobby Fisher` should return 0 results.</strong></summary>

  > I originally was using one method for all the search tests but wanted to see the other methods for running this test. The method I chose for this test was based off the code from Selenium WebDriverJs's Wiki Homepage. I also wanted to incorporate the catching the error and done like as seen in Test 0, however, I wasn't able. I was able to alter the code to fit in my solution


  ```js
  driver.get('http://www.google.com/ncr');
  driver.findElement(By.name('q')).sendKeys('webdriver');
  driver.findElement(By.name('btnG')).click();
  driver.wait(until.titleIs('webdriver - Google Search'), 1000);
  driver.quit();
```

</details>


<details>
<summary><strong> Searching for `event` should return 10 results.</strong></summary>

  > For this search method, I used a getting the value of the search of events.

</details>


<details>
<summary><strong> Searching for a word under three character should trigger an alert box with the text </br> `Search string must be at least 3 characters long`.</strong></summary>

  > This test is the original code that I was using for all the search tests. I found this method in StackOverFlow while learning how to enter text and clicking the submit button. I enjoyed this most because this was more of a unique way to test search.



</details>

---
## Extra credit Tests

I really enjoyed the extra credit option. I was able to test out theories and once I was able to get one test to pass, I wanted to do more.

<details>
<summary><strong> The Software dropdown should list 6 items.</strong></summary>

  > The first test went from simply selecting the a dropdown and then making the it's menu items visible. However, I extended the test to checking that all 6 items are listing to get more bang for the buck.  


</details>


<details>
<summary><strong> Event and Room Settings view all button should display 15 articles.</strong></summary>

  > My second test was simply to check that the view all button worked. But as you can see, that also evolved to test that all 15 articles are displayed. This test was pending for the majority of time and I thought I would have to delete it. However, with a little elbow grease it finally passed. I chose to find the element by xpath because it was more direct and to get experience with it.

</details>


<details>
<summary><strong> Should navigate to Careers link </strong></summary>

  > This test was similar to the dropdown test done previously, however this time I am checking on one menu item on the dropdown list.

</details>


<details>
<summary><strong> Should take a screenshot</strong></summary>

  > ![](./screenshotExample.png) So far this is my favorite test. I wasn't sure I could even get it to work! I tried several different methods but in the end I was able to succeed with the help of a [YouTube video tutorial](https://youtu.be/9zecmBx1--0) and [Browserstack](https://www.browserstack.com/automate/node#enhancements-screenshots) .

</details>


<details>
<summary><strong> Should have 6 items without links</strong></summary>

  > When going through the site, I noticed some links that were incomplete. The following have a link to 'http://help.socialtables/#':
  * Request a demo (Section id #Communication. Note the class name for this section contains a typo "containter-fluid")
  * Twitter #1 (Footer, Social)
  * Facebook (Footer, Social)
  * Twitter #2 (Footer, Social)
  * LinkedIn (Footer, Social)
  * ST Community (Footer, Navbar)

</details>

## All tests pass!
![](./passing.png)

<details>
<summary><strong>My reaction</strong></summary>

  >     ![](./happyDance.gif)

</details>

---


## Tutorials/Sources



## Sites

* [Portfolio](http://lafrish.github.io/)
* [Resume](https://drive.google.com/open?id=0B9BDSYdQ3pr8eGxDbzB5SVVKLUdyWWJONHJpTGFBYkpGdFR3)
* [LinkedIn](https://www.linkedin.com/in/farishtahaider)
* [GitHub Repo](https://github.com/LaFrish)
