document.addEventListener("DOMContentLoaded", function (event) {
    const maxBookShoppingCartQuantity = 5;

    class Book {
        constructor(bookCategory, bookTitle, bookCover, bookPrice, bookDescription, bookIsbn, bookStockQuantity) {
            this.bookCategory = bookCategory;
            this.bookTitle = bookTitle;
            this.bookCover = bookCover;
            this.bookDescription = bookDescription;
            this.bookIsbn = bookIsbn;
            this.bookPrice = bookPrice;
            this.bookStockQuantity = bookStockQuantity;
            this.bookShoppingCartQuantity = 0;
        }
    }


    class Shop {
    constructor() {
        this.shoppingCart = new ShoppingCart("Shopping Cart");

    }
    class ShoppingCart {
    constructor(shoppingCartHeading) {
        this.shoppingCartHeading = shoppingCartHeading;
        this.books = [];
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
    // This method adds a book and the quantity of books to your shopping cart.
    addBookToShoppingCart(bookObject) {
        /******************************************
         *****    Add Code for Task 2 here    *****
         ******************************************/

            //article of html5 exercise is not in constructor
        let articleCart = document.createElement("article");
        articleCart.id = "shoppingCartProduct_" + bookObject.bookIsbn;
        this.unorderedListShoppingCart.appendChild(articleCart);

        //pushes object in this.books array
        this.books.push(bookObject);
    }

    // This method deletes a specific book from your shopping cart.
    deleteBookFromShoppingCart(bookObject) {
        /******************************************
         *****    Add Code for Task 3 here    *****
         ******************************************/
        /*let button = document.createElement("button");
            button.classList.add("xShoppingCart");
            button.id = "xShoppingCart_" + book.bookIsbn;
            button.textContent = "X";*/

        let elementBook = document.getElementById("shoppingCartProduct_" + bookObject.bookIsbn);

        // find out where the object is in the array.....returns a new array with the bookIsbn as value
        // throw this value of bookObjekt.bookIsbn one can find with the index at what position the object is
        let indexOfBook = this.books.map(function(item) { return item.bookIsbn; }).indexOf(bookObject.bookIsbn);

        //does while, does until-------1 when there is no match in the array
        while(indexOfBook !== -1){

            //splice (array.splice(index, quantity)) method to remove elements from array
            this.books.splice(indexOfBook, 1);

            indexOfBook = this.books.map(function(item) { return item.bookIsbn; }).indexOf(bookObject.bookIsbn);
        }
        //deletes element from shopping cart
        elementBook.remove();
    }

    // This method updates the quantity of a specific books in your shopping cart.
    updateBookInShoppingCart(bookObject) {
        /******************************************
         *****    Add Code for Task 4 here    *****
         ******************************************/
        let elementOld = document.getElementById("shoppingCartProduct_" + bookObject.bookIsbn);
        let elementArticle = document.getElementById("articleShoppingCartQuantity_" + bookObject.bookIsbn);


        if (elementOld != null) {
            elementOld.remove();
        }

        if (elementArticle != null){

            let articleCart = document.createElement("article");
            articleCart.id = "shoppingCartProduct_" + bookObject.bookIsbn;

            let quantityOfBook = elementArticle.value;

            // find out where the object is in the array.....returns a new array with the bookIsbn as value
            // throw this value of bookObjekt.bookIsbn one can find with the index at what position the object is
            let itemIndex = this.books.map(function(item) { return item.bookIsbn; }).indexOf(bookObject.bookIsbn);

            //does while, does until-------1 when there is no match in the array
            while(itemIndex != -1)
            {
                //splice (array.splice(index, quantity)) method to remove elements from array
                this.books.splice(itemIndex, 1)

                itemIndex = this.books.map(function(item) { return item.bookIsbn; }).indexOf(bookObject.bookIsbn);

                //this.books is an array with objects {[object], [object], [object]} not values in shoppingcart
                // find out where the object is in the array.....returns a new array with the bookIsbn of the bookObject as value bc isbn is like an id
                //you then have a new array of strings {"123456", "12345", "1234"}
                // through this value of bookObjekt.bookIsbn one can find with the index at what position [0] or [2] the object is
                // if the search was unsuccesfull (idex returns -1), if there was no more object with that specific isbn in the array, while stopps
            }

            for (let index = 1; index <= quantityOfBook; index++) {

                //pushes object in this.books array
                this.books.push(bookObject);
            }

            let bookPrice = bookObject.bookPrice * quantityOfBook;
            Math.round((bookPrice*100)/100);
            articleCart.textContent = bookObject.bookTitle + "Pcs" + quantityOfBook + " " + bookPrice;

            this.unorderedListShoppingCart.appendChild(articleCart);
        }
    }


    showSumInShoppingCart() {
        /******************************************
         *****    Add Code for Task 5 here    *****
         ******************************************/
        let sum = 0;
        this.books.forEach(element => {
            sum += element.bookPrice;
        });
        document.getElementById("shoppingCartSum").textContent = "Sum: " + Math.round(sum*100)/100 + "€";
    }
}

const shop = new Shop();

let book = [];

realavenger[0] = new Book("HTML5", "Html5: Up And Running", "img/HTML5_Up_And_Running.jpg", 24.80, "If you don't know about the new features available in HTML5, now's the time to find out. The latest version of this markup language is going to significantly change the way you develop web applications, and this book provides your first real look at HTML5's new elements and attributes.", "978-0596806026");
realjigsaw[1] = new Book("HTML5", "Pocket Reference", "img/HTML5_Pocket_Reference.jpg", 15.90, "Need help finding the right HTML5 element or attribute for your web page or application? HTML5 Pocket Reference is the classic reference that web designers and developers have been keeping close at hand for more than thirteen years.", "978-1449363352");
vrinception[2] = new Book("JavaScript", "Java Script: The Definitive Guide", "img/JavaScript_1.jfif", 47.30, "Since 1996, JavaScript: The Definitive Guide has been the bible for JavaScript programmers programmer's guide and comprehensive reference to the core language and to the client-side JavaScript APIs defined by web browsers.", "978-1491952023");
book[3] = new Book("JavaScript", "Java Script: The good parts", "img/Java_Script_2.jfif", 23.90, "Most programming languages contain good and bad parts, but JavaScript has more than its share of the bad, having been developed and released in a hurry before it could be refined.", "978-0596517748");

shop.addBookToScreen(book[0]);
shop.addBookToScreen(book[1]);
shop.addBookToScreen(book[2]);
shop.addBookToScreen(book[3]);
shop.shoppingCart.addBookToShoppingCart(book[0]);

book.forEach(element => {
    let button = document.getElementById("buttonUpdateShoppingCart_" + element.bookIsbn);
    button.addEventListener("click", function () {
        shop.shoppingCart.updateBookInShoppingCart(element);
        shop.shoppingCart.showSumInShoppingCart();

    });
});
