# Assignment4

## Komputer Store

## Create a Dynamic Webpage using JS

This project is built on basic Javascript, HTML and css.

**After cloning the repo, use "NPM I" to install dependencies. (SCSS)**

**The minimum requirements for the website are met, except for using the Number format feature in JavaScript**  
Other unfinished features:
 - Some incorrectly aligned elements.
 - Stock not changing on purchase.

How the app works:
 - Click "work" button to earn money.
 - Earned money is stored as your "pay".
 - Click "bank" button to deposit pay into bank account.
 - Your deposited money is stored as your balance.
 - If you have money in your bank account, you can apply for a loan.
    - You cannot get a loan higher than twice your current balance.
    - You can only have **one** active loan.
 - When you have an active loan, you have to repay it with your *pay*. A repay loan button appears if you have an active loan.
 - If you have an active loan, and choose to deposit your pay to your bank account, 10% of your pay will be deducted and paid towards your loan.
 - You can browse the selection of available computers in the drop-down menu.
 - When a PC is selected you can see its price, how many are in stock and read the specs. 
 - To buy a PC click the *BUY NOW* button.
    - A response message will appear telling you that you've either successfully purchased a PC or that you can not afford the chosen PC.

*"Future" features:*
 - Purchase history:
    - A *Purchase history* element that shows up after a successful purchase, displaying information about the previously purchased computers(PC name and price).
    - Reduce stock after successful purchase. Not allowing for purchase of *Out of stock* items.

**The image for "The Visor" does not show up on the website. This is because the returned url is for a .jpg file, while the actual image is a .png file."**