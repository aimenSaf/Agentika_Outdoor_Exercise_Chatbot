# Agentika_Outdoor_exercise_based_on_weather.

This AI agent suggests the optimal outdoor exercise time based on the weather. Aside from this, the chatbot also has a bunch of other features to make the user expeience more enjoyable like a weather-related games or challenges and activity or exercise recommendation according to the weather as well. 

# Features:
1.  Weather-Related Games:
    The aim of this feature is to enhance the user experience by introducing weather-themed challenges or activities based on the current weather conditions. This 
    would add a gamification layer to the application, making it more engaging and potentially educational.
2.  Activity/Exercise Recommendation:
    The AI Agent will suggest specific outdoor activities based on the current weather conditions. This will provide a more personalized user experience, allowing 
    the agent to not only inform about the suitability of outdoor exercise but also to recommend what type of activity might be best.
3.  Optimal Exercise time:
    The main idea behind this chat bot is to recommend the user the best or optimal time to go out and exercise based on the forecast for the entire day.
4.  Agent Characteristics:
    To give the user a more humanized experience, the agent - Willow - changes her appearnce based on the weather. If it is raining in real time, it will rain in 
    her domain and she would put on a rain coat. She would reenact these actions for each weather.

# Installation Steps:
1. Setup the SDK:
   The first step was to install the usdk into the local machine using 'npm install -g usdk'. Verify that indeed usdk is installed by checking the verison and then
   run the following command to actually run the sdk: 'usdk login'. A browser will open where we will login to upstreet.
2. Guided Interview:
   To setup the agent, running 'usdk create' will prompt the user to answer some questions in order to create a chatbot tailored to the needs of the user; in this 
   case a chat bot that helps user find the best time for exercise. 
3. Setting up Agent:
   After a the agent is setup on the local machine, the next step is to tailor the react code to cover the features of the intended chatbot. The features are 
   providing user the optimal time to exercise based on the current day's forecast, weather based challenges to engage user and lastly activity recommendation for 
   a more personalized experience.

```bash
# Command for installation
git clone https://github.com/yourusername/your-repo.git
# To run the chat
usdk chat
#To edit the chatbot ti change characteristics:
usdk edit
