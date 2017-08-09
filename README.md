# DragonBoard: A naïve dashboard for Dragon

### Runtime Requirements for Python

0. flask

1. [Dragon](https://github.com/neopenx/Dragon)

-----
### Installation
1. Clone this repository

2. Copy files

    ```Shell
    cp -r DragonBoard/static DragonBoard/templates Dragon/python/tools/board
    ```
----

##  Usage

### Import

You should start App firstly.

```Shell
from dragon.tools.board.app import DragonBoard
board = DragonBoard()
board.start()
```

### SummaryWriter

We support ``ScalarSummary`` only NOW.

```Shell
import dragon.tools.summary_writer as sw
scalar_writer = sw.ScalarSummary()
iter = 2333
scalar_writer.add_summary(('loss', 2.333), 2333)
```
``Attention``: We preset a ``ScalarSummary`` for ``caffe.Solver``, you just need to start the app.

### DashBoard

Open the Browser, direct to ``localhost:5000`` or ``127.0.0.1:5000``

You can also set the port freely for multiple Apps:

```Shell
board = DragonBoard(port=2333)
board.start()
```
