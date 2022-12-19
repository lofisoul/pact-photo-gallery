

Objective 1: Photo Gallery View
=============
Build a baseline photo selector view using inspiration from the screen shot.
Please be creative, it doesn't have to match the sample provided. We're going for 
style, approach and overall code design of how you write it.

Try not to go overboard on this...unless you want to. Have fun!


Objective 2: Make it work (optional)
=============
There are (2) data files:
    FileTree.json
    ContentObjects.json

FileTree:
    1. There are two types of object schemes for a file tree;
        a) Folder: does not hold assets only other folders or albums.
        and
        b) Albums: holds content assets, images

    2. Example:
        "2015": {                           // objects name
            "id": "SNK9A",                  // folder or album id - this will come into play when viewing ContentObjects
            "scheme": "folder",             // either folder or album as above
            "size": "3",                    // number of nested objects or images
            "children": {                   // child objects held in the scheme
                "Video": {                  // ...
                    "id": "SVB30",
                    "scheme": "album",
                    "size": "83"
                },
                "High res": {
                    "id": "QB2MG",
                    "scheme": "album",
                    "size": "27"
                },
                "Web res": {
                    "id": "N0GRQ",
                    "scheme": "album",
                    "size": "738"
                }
            }
        }
    
ContentObjects:
    Notes: 
        1. To render the image please use the "url.canto.500" or 800 value. This is sample data, so CDN urls may have expired.
        2. "idPath" references the path ids within the FileTree
        3. "namePath" is a helper to resolve the display name path of the asset, when needed.
        3. Tags and Keywords are used for searching images, outside of the scope of 
           this task, unless you want to include result based search features?.. up to you.

    Example:
    {
        "id": "u3nrthi6qd21n570h8du59sg1p",
        "idPath": "HU0OQ/LSFOF",
        "name": "WA1-MBB-COS",
        "namePath": "FW20/FW20 - Laydown",
        "albumName": "FW20 - Laydown",
        "scheme": "image",
        "contentType": "image/jpeg",
        "approvalStatus": "Approved",
        "dateCreated": "2020-09-19T09:21:32+00:00",
        "dateLastModified": "2020-10-07T11:36:39+00:00",
        "dateUploaded": "2020-10-03T08:12:36+00:00",
        "dpi": "300",
        "dimension": "1980*2400 Pixels",
        "height": "2400",
        "width": "1980",
        "size": "860500",
        "tag": [
            "Blue",
            "Boxer Brief",
            "Cobalt Stripe",
            "FW20",
            "Underwear"
        ],
        "keyword": [
            "Laydown",
            "Men"
        ],
        "customFields": {
            "Image Type": null
        },
        "url": {
            "cdn": {
                "500": "https://d3opzdukpbxlns.cloudfront.net/0daca21e-cffa...",
                "800": "https://d3opzdukpbxlns.cloudfront.net/0daca21e-cffa...",
                "2000": "https://d3opzdukpbxlns.cloudfront.net/0daca21e-cffa..."
            },
            "canto": {
                "500": "https://pact.canto.com/direct/image/u3nrthi6qd21n57...",
                "800": "https://pact.canto.com/direct/image/u3nrthi6qd21n57...",
                "2000": "https://pact.canto.com/direct/image/u3nrthi6qd21n57..."
            }
        }
    }
