# aragorn
an app to help you track your employees

## Description
An application that uses a mySQL database to track employees. It has basic functionality where you can add employees, roles, and departments. 

![gif of project](./Assets/aragorn.gif)

Had to start with the department table since it doesn't contain any foreign keys. That way mySQL isn't looking for anything and won't throw errors. Then created the role and then employee tables since they required foreign keys. 

At first I went way overboard with my functions. I wrote some fun things that I enjoyed. You can find them all in my "graveyard of dead code" text file. My giant function to call functions and then my CamelCase maker function was also fun. 

I really enjoy mySQL, once I started using that instead of Sequelize, this project came together a lot faster. 

I would like to spend more time with this because there's some functionality that I think I'm very close to acheiving, but time makes fools of us all. I'll probably come back to this because I really think I'm close to figuring out what I'm doing wrong with the indexing. I think it's in the wrong place and I've got (as always) some syntax problems. I'll get there. For now, this application is working and I'm pretty proud of that. 