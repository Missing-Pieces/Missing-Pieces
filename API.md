# Server API Documentation
### React Router base URL: http://localhost:3000
### API base URL: http://localhost:3000/api
**User details are expected to be captured via OAuth / session cookie**   
Note: _BGA_ stands for the [Board Game Atlas API](https://www.boardgameatlas.com/api/docs)

---

## Login Page
### React-Router:
`/login`


### _Login Button:_
_**GET** `/user/login`_

**Expected Action:** Start OAuth process


### _Logout Button:_
_**GET** `/user/logout`_

**Expected Action:** Disassociate session

---

## Home Page
### React-Router:
`/`


### _useEffect:_
_**GET** `/collection`_

**Expected Response:**
  - Array of game objects in user's collection
  - Piece objects are sub-array of associated game
```jsonc
[
  {
    id: String, /* gameid */
    name: String, /* game title */
    img: String, /* url, retrieved from BGA API (image.original) */
    pieces: [
      {
        type: String, /* "have" || "want */
        desc: String /* user description of game piece */
      },
      {
        /* next game piece */
      }
    ]
  },
  {
    /* next game object */
  }
]
```


### _handlePieceAdd:_
_**POST** `/collection/pieces/{gameid}`_
  - {gameid} is BGA game.id of game corresponding to piece
  - gameid should be captured from button id or containing Game card

**POST Body:**
```jsonc
  {
    type: String, /* "have" || "want" */
    desc: String /* user description of piece */
  }
```

**Expected Action:**
Add piece to user's collection with associated game

**Expected Response:**
```jsonc
{
  success: Boolean /* piece successfully written to DB */
}
```


### TODO:
  1. Delete piece from game in user's collection
  1. Delete game from user's collection

---

## Game Search Page
### React-Router:
`/games`


### _handleSearch:_
_**GET** `/games?query={search%20string}`_
  - "search string" is name of game to search for via BGA, captured from user input
  - spaces in search string will be encoded as `%20`

**Expected Response:**
  - Server will need to fetch & transform search data from BGA
```jsonc
[
  {
    id: String, /* gameid */
    name: String, /* game title */
    img: String, /* url, from images.original */
    desc: String, /* game description */
    year_published: Number,
    primary_publisher: String
  },
  {
    /* next game object */
  }
]
```


### _handleGameAdd:_
_**POST** `/collection/{gameid}`_
  - {gameid} is BGA game.id, as captured from search

**Expected Action:**
Add game to user's collection in DB

**Expected Response:**
```jsonc
{
  success: Boolean /* game successfully written to user's collection in DB */
}
```

---

## Part Search Page
### React-Router:
`/parts/{_gameid_}`
  - Part Search can only be reached by clicking through from a particular game
  - {_gameid_} will be captured on clickthrough via route param (props.match.params)


### _useEffect:_
_**GET** `/pieces/{gameid}`_

**Expected Response:**
  - Response should contain all pieces that users **have** to trade for a particular **gameid**, grouped by user
```jsonc
{
  userPieces: [
    {
      username: String,
      pieces: [
        "piece description",
        "next piece description"
      ]
    },
    {
      /* next user's pieces */
    }
  ],
  gameDetails: {
    title: String,
    desc: String,
    img: String /* url from BGA (images.original) */
  }
}
```

