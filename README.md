# onlinechess

toy project

To do list:

frontend:

-   Board display

    -   individual blocks
    -   block colour and id
    -   board
    -   goti on block
    -   black and white gotis
    -   chess board initial positions

-   goti check legal moves

    -   check check

-   display gotis
-   disable board after player's turn, send status to backend
-   update board after server response for other player's turn

-   cutting scenes
    -   remove goti if cut
    -   goti cut record
    -
-   sipahi promotion scenes

    -   choose promotion

-   Turns

    -   rani: seedha, tedha
    -   ghoda: L
    -   wazir: tedha
    -   Hathi: seedha or castling
    -   sipahi: forward 1 or 2 if first move
    -   raja: seedha, tedha, 1 or castling

    -   Castling: only if raja hasn't moved

-   Check scenes

    -   you cant play a turn if there is a check against you after that turn

-   Cant move scenes

    -   for your each potential move, check if all check

-   Stalemate scenes

    -   no check + cant move

-   Checkmate scenes:
    -   check + cant move

backend:

-   server maintains board status and players' turn status
-   server sends current board on receiving legal move from any player

later:

-   timer
-   login functionality
-   possible moves
-   offline multiplayer
