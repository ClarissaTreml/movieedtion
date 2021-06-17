document.addEventListener("DOMContentLoaded", function (event) {
    const maxRookShoppingCartQuantity = 6;

    class Room {
        constructor(roomCategory, roomTitle, roomPrice, roomID, roomStockQuantity) {
            this.roomCategory = rookCategory;
            this.roomTitle = rookTitle;
            this.roomDescription = rookDescription;
            this.roomID = rookID;
            this.roomPrice = rookPrice;
            this.roomStockQuantity = rookStockQuantity;
            this.roomShoppingCartQuantity = 0;
        }
    }

    class Shop {
        constructor() {
            this.shoppingCart = new ShoppingCart("Shopping Cart");
            this.mainBookScreen = document.getElementById("mainBookScreen");
        }

        // This method must ensure that a room is displayed in the mainBookScreen.
        addRoomToScreen(room) {
            /******************************************
             *****  Add Code for Task 1 & 6 here  *****
             ******************************************/
            let section = document.createElement("section");
            section.classList.add("category");

            let h1 = document.createElement("h1");
            let article = document.createElement("article");
            let header = document.createElement("header");
            let h2 = document.createElement("h2");
            let category = document.createTextNode(room.roomCategory);

            let price = document.createElement("p");
            Math.round((price*100)/100);
            price.append(room.roomPrice , " €");

            let description = document.createElement("p");
            description.append(room.roomDescription);

            let id = document.createElement("p");
            id.append("ID ", room.roomID);

            let select = document.createElement("select");
            select.setAttribute("class", "articleShoppingCartQuantity");
            select.id = "articleShoppingCartQuantity_" + room.roomID;

            let values = ["1","2","3","4","5"];
            for (const val of values) {
                let option = document.createElement("option");
                option.value = val;
                option.text = val.charAt(0);
                select.appendChild(option);
            }

            let span = document.createTextNode(" Quantity: ");

            let button = document.createElement("button");
            button.id = "buttonUpdateShoppingCart_" + room.roomID;
            button.textContent = "Update Shopping Cart";




            // wenn h1.append == vorhanden?? --> String vergleichen

            if (h1.innerText != category) {
                h1.append(category);
            }

            h2.append(book.bookTitle);
            section.appendChild(h1);
            section.appendChild(article);
            article.appendChild(header);
            article.appendChild(img);
            header.appendChild(h2);
            article.appendChild(span);
            article.appendChild(select);
            article.appendChild(button);
            article.appendChild(price);
            article.appendChild(description);
            article.appendChild(id);

            this.mainBookScreen.appendChild(section);
        }
    }

    class ShoppingCart {
        constructor(shoppingCartHeading) {
            this.shoppingCartHeading = shoppingCartHeading;
            this.rooms = [];
            this.shoppingCartSum = 0;

            this.asideShoppingCart = document.getElementById("shoppingCart");
            this.header2ShoppingCart = document.createElement("h2");
            this.textHeader2ShoppingCart = document.createTextNode(this.shoppingCartHeading);
            this.unorderedListShoppingCart = document.createElement("ul");
            this.divShoppingCartSum = document.createElement("div");
            this.divShoppingCartSum.id = "shoppingCartSum";
            this.divShoppingCartSum.textContent = "Sum: " + this.shoppingCartSum + " €";

            this.header2ShoppingCart.appendChild(this.textHeader2ShoppingCart);
            this.asideShoppingCart.appendChild(this.header2ShoppingCart);
            this.asideShoppingCart.appendChild(this.unorderedListShoppingCart);
            this.asideShoppingCart.appendChild(this.divShoppingCartSum);
        }
        // This method adds a room and the quantity of rooms to your shopping cart.
        addRoomToShoppingCart(roomObject) {
            /******************************************
             *****    Add Code for Task 2 here    *****
             ******************************************/

                //article of html5 exercise is not in constructor
            let articleCart = document.createElement("article");
            articleCart.id = "shoppingCartProduct_" + roomObject.roomID;
            this.unorderedListShoppingCart.appendChild(articleCart);

            //pushes object in this.rooms array
            this.room.push(roomObject);
        }

        // This method deletes a specific room from your shopping cart.
        deleteRoomFromShoppingCart(roomObject) {
            /******************************************
             *****    Add Code for Task 3 here    *****
             ******************************************/
            /*let button = document.createElement("button");
                button.classList.add("xShoppingCart");
                button.id = "xShoppingCart_" + room.bookIsbn;
                button.textContent = "X";*/

            let elementRoom = document.getElementById("shoppingCartProduct_" + roomObject.roomID);

            // find out where the object is in the array.....returns a new array with the bookIsbn as value
            // throw this value of bookObjekt.bookIsbn one can find with the index at what position the object is
            let indexOfRoom = this.rooms.map(function(item) { return item.roomID; }).indexOf(roomObject.roomID);

            //does while, does until-------1 when there is no match in the array
            while(indexOfRoom !== -1){

                //splice (array.splice(index, quantity)) method to remove elements from array
                this.rooms.splice(indexOfRoom, 1);

                indexOfRoom = this.rooms.map(function(item) { return item.roomID; }).indexOf(roomObject.roomID);
            }
            //deletes element from shopping cart
            elementRoom.remove();
        }

        // This method updates the quantity of a specific rooms in your shopping cart.
        updateRoomInShoppingCart(roomObject) {
            /******************************************
             *****    Add Code for Task 4 here    *****
             ******************************************/
            let elementOld = document.getElementById("shoppingCartProduct_" + roomObject.roomID);
            let elementArticle = document.getElementById("articleShoppingCartQuantity_" + roomObject.roomID);


            if (elementOld != null) {
                elementOld.remove();
            }

            if (elementArticle != null){

                let articleCart = document.createElement("article");
                articleCart.id = "shoppingCartProduct_" + roomObject.roomID;

                let quantityOfRoom = elementArticle.value;

                // find out where the object is in the array.....returns a new array with the bookIsbn as value
                // throw this value of bookObjekt.bookIsbn one can find with the index at what position the object is
                let itemIndex = this.rooms.map(function(item) { return item.roomID; }).indexOf(roomObject.roomID);

                //does while, does until-------1 when there is no match in the array
                while(itemIndex != -1)
                {
                    //splice (array.splice(index, quantity)) method to remove elements from array
                    this.rooms.splice(itemIndex, 1)

                    itemIndex = this.rooms.map(function(item) { return item.roomID; }).indexOf(roomObject.roomID);

                    //this.rooms is an array with objects {[object], [object], [object]} not values in shoppingcart
                    // find out where the object is in the array.....returns a new array with the bookIsbn of the roomObject as value bc isbn is like an id
                    //you then have a new array of strings {"123456", "12345", "1234"}
                    // through this value of bookObjekt.bookIsbn one can find with the index at what position [0] or [2] the object is
                    // if the search was unsuccesfull (idex returns -1), if there was no more object with that specific isbn in the array, while stopps
                }

                for (let index = 1; index <= quantityOfRoom; index++) {

                    //pushes object in this.rooms array
                    this.rooms.push(roomObject);
                }

                let roomPrice = roomObject.roomPrice * quantityOfRoom;
                Math.round((roomPrice*100)/100);
                articleCart.textContent = roomObject.roomTitle + "Pcs" + quantityOfRoom + " " + roomPrice;

                this.unorderedListShoppingCart.appendChild(articleCart);
            }
        }

        // This method prints the summarized price of the rooms in the shopping cart.
        showSumInShoppingCart() {
            /******************************************
             *****    Add Code for Task 5 here    *****
             ******************************************/
            let sum = 0;
            this.rooms.forEach(element => {
                sum += element.roomPrice;
            });
            document.getElementById("shoppingCartSum").textContent = "Sum: " + Math.round(sum*100)/100 + "€";
        }
    }

    const shop = new Shop();

    let room = [];

    realHarryPotter[0] = new Room("Reallife", "Real Life: Harry Potter", 24.80,  "978-0596806026");
    realParanormalActivity[1] = new Room("Reallife", "Real Life: Paranormal Activity", 15.90, "978-1449363352");
    vrInception[2] = new Room("Online", "VR: Inception", 47.30,  "978-1491952023");
    onlineJigsaw[3] = new Room("Online", "Online: Jig Saw", 23.90, "978-0596517748");
    onlineAvengers[3] = new Room("Online", "Online: Avengers",  23.90, "978-0596517748");

    shop.addRoomToScreen(room[0]);
    shop.addRoomToScreen(room[1]);
    shop.addRoomToScreen(room[2]);
    shop.addRoomToScreen(room[3]);
    shop.shoppingCart.addRoomToShoppingCart(room[0]);


    room.forEach(element => {
        let button = document.getElementById("buttonUpdateShoppingCart_" + element.roomID);
        button.addEventListener("click", function () {
            shop.shoppingCart.updateRoomInShoppingCart(element);
            shop.shoppingCart.showSumInShoppingCart();

        });
    });
});
