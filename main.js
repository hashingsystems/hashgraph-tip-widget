hashjs = document.createElement('script');
hashjs.setAttribute('src','https://cdn.hashingsystems.com/hash.js')
document.head.appendChild(hashjs);

theme = document.getElementById('hedera-pay-btn').getAttribute('theme');


close = document.createElement('button');
close.setAttribute('id','close')
var text = document.createTextNode("Or Cancel");
close.appendChild(text);

buttonpay = document.getElementById('hedera-pay-btn');
buttonpay.setAttribute('style','background:blue; border: none; color: white; padding: 15px 32px; text-align: center; text-decoration: none; display: inline-block; font-size: 16px; margin: 4px 2px; cursor: pointer;font-family: "Palatino Linotype", "Book Antiqua", Palatino, serif;')

Image = document.createElement('img');
Image.setAttribute('src',"icon.png");
Image.setAttribute('style','width:100px;height:100px;margin-left:43%;')

amountfield = document.createElement('input');
amountfield.setAttribute('type','text');
amountfield.setAttribute('id','hedera-amount');
amountfield.setAttribute('placeholder','Enter Amount (In HBar)');
amountfield.setAttribute('style','width: 100%;padding: 12px 20px;border-bottom: 0.5px solid darkgray;border-left: white;border-right: white;border-top: white;font-size:110%;color: black;background-color: transparent;margin-top:6%;font-family: "Palatino Linotype", "Book Antiqua", Palatino, serif;')

            

hederatriggerbtn = document.createElement('button');
hederatriggerbtn.setAttribute('id','hedera-trigger-button');
var btntext = document.createTextNode("Pay Using Composer");
hederatriggerbtn.appendChild(btntext);
hederatriggerbtn.setAttribute('onclick','pay_hedera()')


document.getElementById('hedera-pay-btn').onclick = function showamountmodal() {
      recipient = document.getElementById('hedera-pay-btn').getAttribute('address');
      amount = document.getElementById('hedera-pay-btn').getAttribute('amount');

      if (!amount) {
        modal = document.createElement('div');
        modal.setAttribute('id','myModal');
        modal.setAttribute('style','display: block;position: fixed;z-index: 1;padding-top: 100px;left: 0;top: 0;width: 100%;height: 100%;overflow: auto;background-color: green;background-color: rgba(0,0,0,0.4);font-family: "Palatino Linotype", "Book Antiqua", Palatino, serif;')

        content = document.createElement('div');
        content.setAttribute('id','hedera-modal-content')

        info = document.createElement('h3');
        var text = document.createTextNode("You are Paying to" + "  " +recipient);

        content.appendChild(Image);
        info.appendChild(text);
        content.appendChild(info);

        if (theme == 'dark') {
          close.setAttribute('style','width: 100%;background-color: white;color: black;border: 2px solid black;font-size:110%;padding: 14px 20px;margin-top:4%;border: none;border-radius: 30px;cursor: pointer;font-family:"Palatino Linotype", "Book Antiqua", Palatino, serif;box-shadow: 10%;')
          hederatriggerbtn.setAttribute('style','width: 100%;background-color: white;color: black;border: 2px solid black;font-size:110%;padding: 14px 20px;margin-top:10%;border: none;border-radius: 30px;cursor: pointer;font-family: "Palatino Linotype", "Book Antiqua", Palatino, serif;')
          info.setAttribute('style','margin-top:10%;margin-left:30%;font-family: "Palatino Linotype", "Book Antiqua", Palatino, serif;color:white;')
          content.setAttribute('style','background-color: #0e2338;margin: auto;padding: 20px;border: 1px solid #888;width: 80%;width: 490px;height: 450px;border-radius: 50px;font-family: "Palatino Linotype", "Book Antiqua", Palatino, serif;')
          amountfield.setAttribute('style','width: 100%;padding: 12px 20px;border-bottom: 0.5px solid darkgray;border-left: white;border-right: white;border-top: white;font-size:110%;color: white;background-color: transparent;margin-top:6%;font-family: "Palatino Linotype", "Book Antiqua", Palatino, serif;')
        
        }
        else {
          close.setAttribute('style','width: 100%;background-image: linear-gradient(to right,#2d84eb,#8259ef);color: white;font-size:110%;padding: 14px 20px;margin-top:4%;border: none;border-radius: 30px;cursor: pointer;font-family: "Palatino Linotype", "Book Antiqua", Palatino, serif;')
          hederatriggerbtn.setAttribute('style','width: 100%;background-image: linear-gradient(to left,#2d84eb,#8259ef);color: white;font-size:110%;padding: 14px 20px;margin-top:10%;border: none;border-radius: 30px;cursor: pointer;font-family: "Palatino Linotype", "Book Antiqua", Palatino, serif;')
          content.setAttribute('style','background-color: white;margin: auto;padding: 20px;border: 1px solid #888;width: 80%;width: 490px;height: 450px;border-radius: 50px;font-family: "Palatino Linotype", "Book Antiqua", Palatino, serif;')
          info.setAttribute('style','margin-top:10%;margin-left:30%;font-family: "Palatino Linotype", "Book Antiqua", Palatino, serif;')
          amountfield.setAttribute('style','width: 100%;padding: 12px 20px;border-bottom: 0.5px solid darkgray;border-left: white;border-right: white;border-top: white;font-size:110%;color: black;background-color: transparent;margin-top:6%;font-family: "Palatino Linotype", "Book Antiqua", Palatino, serif;')
        }

        content.appendChild(amountfield);
        content.appendChild(hederatriggerbtn);
        content.appendChild(close);
        modal.appendChild(content);
        document.body.appendChild(modal);
      }

      pay_hedera(amount)

}

function pay_hedera(amount){
    var amount;

    if(!amount){
      amount = document.getElementById('hedera-amount').value;
    }
    recipient = document.getElementById('hedera-pay-btn').getAttribute('address');
    console.log(amount);
    console.log(recipient);
    let data = {
        time:"1",
        memo:"Hedera Transaction for " + recipient,
        contentid:'test1',
        redirect:'{"nonPayingAccount": "/nomicropaymentreceived.html"}',
        recipientlist:'[{"tinybars": "' + amount + '", "to":"' + recipient + '"}]',
        type:'article'
      }
      window.hash.triggerCryptoTransfer(data, (err, res) => {
        console.log("Callback::Error:", err)
        if (res) {
            modal = document.getElementById('hedera-modal-content');
            modal.innerHTML = "";
            msg = document.createElement('span');
            
            var text = document.createTextNode("Payment Successfully Made");
            msg.setAttribute('style','color:#40e0d0;font-size:200%;margin-left:20%;padding-top:130px;')
            
            msg.appendChild(text);
            modal.appendChild(msg);
        }
        else {
            modal = document.getElementById('hedera-modal-content');
            modal.innerHTML = "";
            msg = document.createElement('span');
            var text = document.createTextNode("Payment Not Made");
            msg.setAttribute('style','color:#40e0d0;font-size:200%;margin-left:20%;padding-top:130px;')

            
            msg.appendChild(text);
            modal.appendChild(msg);
        }
      });
}

close.onclick = function() {
    var modal = document.getElementById("myModal");
    document.body.removeChild(modal);
}
