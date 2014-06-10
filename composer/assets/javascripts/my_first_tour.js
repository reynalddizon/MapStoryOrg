// Define the tour!
    var tour = {
      id: "hello-hopscotch",
      steps: [
		{
          title: "Welcome!",
          content: "Welcome to MapStory Composer. To start the tour, click Next.",
          target: "composer",
          placement: "top",
		  xOffset: 'center',
		  yOffset: 'center',
          arrowOffset: 'right'
        },
		{
          title: "StoryLayers Tab",
          content: "This is where you add, edit and configure all your geospatial information.",
          target: "SLTab",
          placement: "bottom"
        },
        {
          title: "StoryBoard Tab",
          content: "This is where you organize story chapters called StoryBoxes.",
          target: "SBTab",
          placement: "bottom"
        },
		{
          title: "StoryPins Tab",
          content: "This is where you add annotations, photos, videos and external links on you MapStory.",
          target: "SPTab",
          placement: "bottom"
        },
		{
          title: "Preview Tab",
          content: "This is where you configure the playback and other fixes before you publish your MapStory.",
          target: "SPVTab",
          placement: "bottom"
        },
      ]
    };

    // Start the tour!
    hopscotch.startTour(tour);