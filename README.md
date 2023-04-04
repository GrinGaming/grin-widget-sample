# GrinData Widget

The GrinWidget is in Vanilla Javascript and can easily be inserted into a project by importing the script, and calling the global function in your own code.

## Get Started

Add this code to the head of your index.html file:

    <script  type="module"  src="https://widget.grindata.io/widget/widget.js"  id="grin-widget-module"></script>
    <link rel="stylesheet"  href="https://widget.grindata.io/widget/widget-mobile.css"  type="text/css">
    <link  rel="preload"  href="https://use.typekit.net/wvy0rhu.css">
    <link  rel="stylesheet"  href="https://use.typekit.net/wvy0rhu.css">

## Target the container

To start the widget, you must have a container identified with the id "grin-widget"

    <div  id="grin-widget"></div>

## Initiate the widget

Call the widget to open using the grinWidgetLaunch function, in the sample this is automatically launched from the App.js file with a timeout for simple demonstration. In your project, you'd likely want to initiate this on an action that makes sense for your flow.

    //automatically-inits for demo
    const  timeout = setTimeout(() => {
	    window.grinWidgetLaunch(0, "0");
	    clearTimeout(timeout);
    }, 1000)

# Methods

## grinWidgetLaunch( *customer_id ,  uuid, environment, game_id* )

This function opens the widget to the main menu sport selection screen, and takes customer / user information to authenticate.

|Parameter  | Type  | Description |
|--|--|--|
| customer_id | integer | Your customer_id to identify your platform |
| uuid | string | The UUID of the accessing user, this can follow your own format, as long as it is unique to the specific user.
| environment | string | Declare "development" or "production" |
| game_id | string (optional) | Used to open the widget directly to a game after launch

## grinWidgetGameListView( *game* )

This function opens the widget to the list of games associated with a game type, such as NFL.

|Parameter  | Type  | Description |
|--|--|--|
| game | string | The game league you want to display, current options include "NFL" / "NBA" / "MLB"/ "WNBA" / "SOCCER" |

## grinWidgetGameView( *game_id* )

This function opens the widget to the specific game, this is the main usage view of the widget, game_id can originally be obtained from the GrinData API endpoint `<api>/v1/games/<league>`, an example being `https://api.grindata.io/v1/games/NFL`

|Parameter  | Type  | Description |
|--|--|--|
| game_id | string | The game specific identifier |