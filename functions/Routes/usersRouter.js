"use strict";
const express = require("express");
const { postUser, getUserById, postBookLibrary, getAllBooksByUsername, postBookWishList, getAllWishListByUsername, getBookById, getWishlistBookById, deleteBookById, deleteWishlistBookById, postFriendRequest, postAceptFriendRequest, getFriendsList, getFriendRequestsList, requestBookToBorrow, getRequestsByBook, postAcceptedRequest, getLending, deleteFriendRequestById, deleteBorrowRequest, returnBookById, getBorrowing, getEndpoints } = require("../Controllers/usersControllers");
const usersRouter = express.Router();
usersRouter.route("/newuser").post(postUser);
usersRouter.route("/:username").get(getUserById);
usersRouter
    .route("/:username/books")
    .post(postBookLibrary)
    .get(getAllBooksByUsername);
usersRouter
    .route("/:username/wishlist")
    .post(postBookWishList)
    .get(getAllWishListByUsername);
usersRouter
    .route("/:username/books/:bookid")
    .get(getBookById)
    .delete(deleteBookById);
usersRouter
    .route("/:username/wishlist/:bookid")
    .get(getWishlistBookById)
    .delete(deleteWishlistBookById);
usersRouter
    .route("/:username/friendrequests")
    .post(postFriendRequest)
    .get(getFriendRequestsList);
usersRouter.route("/:username/acceptfriend").post(postAceptFriendRequest);
usersRouter
    .route("/:username/friendrequests/:rejectfriend")
    .delete(deleteFriendRequestById);
usersRouter.route("/:username/friends").get(getFriendsList);
usersRouter
    .route("/:borrower/books/:bookid/requestlend/:owner")
    .post(requestBookToBorrow);
usersRouter
    .route("/:owner/books/:bookid/requestlist/:borrower")
    .get(getRequestsByBook);
usersRouter
    .route("/:owner/books/:bookid/acceptrequest/:borrower")
    .post(postAcceptedRequest);
usersRouter.route("/:owner/lending").get(getLending);
usersRouter
    .route("/:username/borrowrequest/:bookid")
    .delete(deleteBorrowRequest);
usersRouter
    .route("/:borrower/returnbook/:owner/:bookid")
    .delete(returnBookById);
usersRouter.route("/:borrower/borrowing").get(getBorrowing);
module.exports = usersRouter;
