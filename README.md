# Hedera-Pay-Widget

This is a widget for Hedera to tip/pay others

This widget is a tipping widget for the Hedera Chain. One can integrate this widget simply by including the widget script and a button.

The usage is simple and as follows :- 
- main.js :- Include the main.js file host towards the end of your HTML page.

```
<script src="https://raw.githubusercontent.com/Man-Jain/Hedera-Pay-Widget/master/main.js"></script>
```

- Create a button for triggering the Transaction

```
<button address="0.0.234234" theme="dark" id="hedera-pay-btn">Pay Now</button>
````

Parameters :- 
- `address` - Recipient's Hedera Address
- `theme` - Dark (dark) and Light (light) themes
- `amount` (Optional) - Amount to create a transaction for. If not included a popup is shown with option to enter amount.
- `id` - The button must have an id tag with `hedera-pay-btn 

The button can be stylised in any way wanted, as long as it contains the id and other attributes.

## Screenshots :-

#### Dark Theme
![Image1](https://github.com/Man-Jain/Hedera-Pay-Widget/blob/master/image1.png)

Check Live Working :- [Here](https://affectionate-wescoff-47863a.netlify.com/)

#### Light Theme
![Image2](https://github.com/Man-Jain/Hedera-Pay-Widget/blob/master/image2.png)

Check Live Working :- [Here](https://vigorous-neumann-770860.netlify.com/)

## Contributors :- 
- [@Man-Jain](https://github.com/Man-Jain)
- [@Kanika1799](https://github.com/Kanika1799)
