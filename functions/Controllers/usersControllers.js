const express = require("express");

const {
  newUser,
  fetchUserById,
  newBookLibrary,
  fetchBooksById,
  newBookWishList,
  fetchWishListById,
  fetchBookById,
  fetchWishlistBookById,
  removeBookById,
  removeWishlistBookById,
  addFriendRequest,
  acceptFriendRequest,
  fetchFriendsList,
  fetchReqFriendsList,
  postRequestToBorrow,
  getRequestToBorrow,
  acceptRequest,
  fetchLending,
  fetchBorrowing,
  removeFriendRequest,
  removeBorrowRequest,
  returnBorrowedBookById,
  fetchEndpoints,
  fetchAllUsers,
  deleteFriend,
  fetchAllBorrowRequests,
} = require("../Models/usersModels");

exports.postUser = (req, res, next) => {
  const { body } = req;
  newUser(body)
    .then((newUser) => {
      res.status(201).send(newUser);
    })
    .catch((err) => {
      next(err);
    });
};

exports.getUserById = (req, res, next) => {
  const { username } = req.params;
  fetchUserById(username)
    .then((user) => {
      res.status(200).send(user);
    })
    .catch((err) => {
      next(err);
    });
};

exports.getAllUsers = (req, res, next) => {
  fetchAllUsers().then((users) => {
    res.status(200).send(users);
  });
};

exports.postBookLibrary = (req, res, next) => {
  const { body } = req;
  const { username } = req.params;
  newBookLibrary(body, username)
    .then((newBook) => {
      res.status(201).send(newBook);
    })
    .catch((err) => {
      next(err);
    });
};

exports.getAllBooksByUsername = (req, res, next) => {
  const { username } = req.params;
  const { lendable } = req.query;
  fetchBooksById(username, lendable)
    .then((books) => {
      res.status(200).send(books);
    })
    .catch((err) => {
      next(err);
    });
};

exports.postBookWishList = (req, res, next) => {
  const { body } = req;
  const { username } = req.params;
  newBookWishList(body, username)
    .then((newBook) => {
      res.status(201).send(newBook);
    })
    .catch((err) => {
      next(err);
    });
};

exports.getAllWishListByUsername = (req, res, next) => {
  const { username } = req.params;
  fetchWishListById(username)
    .then((books) => {
      res.status(200).send(books);
    })
    .catch((err) => {
      next(err);
    });
};

exports.getBookById = (req, res, next) => {
  const { username, bookid } = req.params;
  fetchBookById(username, bookid)
    .then((book) => {
      res.status(200).send(book);
    })
    .catch((err) => {
      next(err);
    });
};

exports.getWishlistBookById = (req, res, next) => {
  const { username, bookid } = req.params;
  fetchWishlistBookById(username, bookid)
    .then((book) => {
      res.status(200).send(book);
    })
    .catch((err) => {
      next(err);
    });
};

exports.deleteBookById = (req, res, next) => {
  const { username, bookid } = req.params;
  removeBookById(username, bookid)
    .then(() => {
      res.status(204).send();
    })
    .catch((err) => {
      next(err);
    });
};

exports.deleteWishlistBookById = (req, res, next) => {
  const { username, bookid } = req.params;
  removeWishlistBookById(username, bookid)
    .then(() => {
      res.status(204).send();
    })
    .catch((err) => {
      next(err);
    });
};

exports.postFriendRequest = (req, res, next) => {
  const { username } = req.params;
  const { body } = req;
  addFriendRequest(username, body)
    .then((friendname) => {
      res.status(201).send(friendname);
    })
    .catch((err) => {
      next(err);
    });
};

exports.postAceptFriendRequest = (req, res, next) => {
  const { username } = req.params;
  const { body } = req;
  acceptFriendRequest(username, body)
    .then((friendname) => {
      res.status(201).send(friendname);
    })
    .catch((err) => {
      next(err);
    });
};

exports.getFriendsList = (req, res, next) => {
  const { username } = req.params;
  fetchFriendsList(username)
    .then((friends) => {
      res.status(200).send(friends);
    })
    .catch((err) => {
      next(err);
    });
};

exports.getFriendRequestsList = (req, res, next) => {
  const { username } = req.params;
  fetchReqFriendsList(username)
    .then((friends) => {
      res.status(200).send(friends);
    })
    .catch((err) => {
      next(err);
    });
};

exports.requestBookToBorrow = (req, res, next) => {
  const { borrower, owner, bookid } = req.params;
  postRequestToBorrow(borrower, owner, bookid)
    .then(() => {
      res.status(201).send();
    })
    .catch((err) => {
      next(err);
    });
};

exports.getRequestsByBook = (req, res, next) => {
  const { owner, bookid } = req.params;
  getRequestToBorrow(owner, bookid)
    .then((requestList) => {
      res.status(200).send(requestList);
    })
    .catch((err) => {
      next(err);
    });
};

exports.postAcceptedRequest = (req, res, next) => {
  const { owner, bookid, borrower } = req.params;
  acceptRequest(owner, bookid, borrower)
    .then(() => {
      res.status(201).send();
    })
    .catch((err) => {
      next(err);
    });
};

exports.getLending = (req, res, next) => {
  const { owner } = req.params;
  fetchLending(owner)
    .then((lendingList) => {
      res.status(200).send(lendingList);
    })
    .catch((err) => {
      next(err);
    });
};

exports.getBorrowing = (req, res, next) => {
  const { borrower } = req.params;
  fetchBorrowing(borrower)
    .then((borrowList) => {
      res.status(200).send(borrowList);
    })
    .catch((err) => {
      next(err);
    });
};

exports.deleteFriendRequestById = (req, res, next) => {
  const { username, rejectfriend } = req.params;
  removeFriendRequest(username, rejectfriend)
    .then(() => {
      res.status(204).send();
    })
    .catch((err) => {
      next(err);
    });
};

exports.deleteBorrowRequest = (req, res, next) => {
  const { username, bookid } = req.params;
  removeBorrowRequest(username, bookid)
    .then(() => {
      res.status(204).send();
    })
    .catch((err) => {
      next(err);
    });
};

exports.returnBookById = (req, res, next) => {
  const { borrower, owner, bookid } = req.params;
  returnBorrowedBookById(borrower, owner, bookid)
    .then(() => {
      res.status(204).send();
    })
    .catch((err) => {
      next(err);
    });
};

exports.getEndpoints = (req, res, next) => {
  fetchEndpoints()
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      next(err);
    });
};

exports.testEnd = (req, res, next) => {
  res.status(200).send("this has worked perfectly you genius");
};

exports.deletingFriend = (req, res, next) => {
  const { username, todelete } = req.params;
  deleteFriend(username, todelete)
    .then(() => {
      res.status(204).send();
    })
    .catch((err) => {
      next(err);
    });
};

exports.getAllBorrowRequests = (req, res, next) => {
  const { username } = req.params;
  fetchAllBorrowRequests(username)
    .then((books) => {
      res.status(200).send(books);
    })
    .catch((err) => {
      next(err);
    });
};
