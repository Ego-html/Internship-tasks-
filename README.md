# Task#3
3.1
--
 To solve this task I use next steps:
--
1. Transform lbs to kilograms and push to array. This allows to work with one array data.
--
2. Generate a random counts of loads from 1 till 12 which a sportsman will hang on one side neck.
--
3. Create loop with random counts of loads in paragraph 2 in condition. This loop will create random loads. The sum of these loads multiplied by 2 (loads hanging on each side of the neck) and will be result of our first sportsmen. Therefore we take a random result our sportsmen and need get the number wich will be a minimum more than this number.
--
4. In order to get this number I use loop in loop to get sums of all array elements which will be more then sportsmen's result and use method Math.min() to get minimum number of this sums. This is will be solve this task.

# Task#3
3.2
--
The logic of solving this task next:
I created two classes. First class Shirts with parameters size and allSporsmans. Parameter size takes object objShirts with sizes our T-shirts as keys and and numbers of shirts as key values. Parameter allSportsmens takes array objects sportsmens wich create from class Sportsmens. 
In сonstructor class Shirts contains properties object shirts oneSize with value one size sportsment's T-shirt who select one size and twoSize for sportsments who indicated two size. There are also two methods in class Shirts. 
First method countOneSize() gives T-shirts to sportsments who indicated one size. And respectively program gives this sportsments first. The number of T-shirts with the appropriate size is reduced in object objShirts. 
Second method countTwoSize() gives sportsments at the beginning T-shirt the size they indicated first. For example if sportsmen indicated ['XXL', 'XXXL'] he gets XXL T-shirt.
After method countTwoSize() check what we have T-shirt size wich sportsmen indicated first. If we have - break loop and  iteration doesn't reach up to second size. If we don't have T-shirts with one size, iteration    continues and pick up second size. 
Also method countTwoSize() check if we have T-shirt first and second size and array with T-shirts size completely iterated.
If did not have enough T-shirts at least for one sportments console.log() returns appropriate message and vice versa if enough T-shirts will also notify message.  

# Task#4

 The logic of solving this task is build on the idea what I find all actors on our field and points on vertical (X) and horizontal (Y)  axis to these actors are in "good position". After I find all cross multiplication this points and rule out their recurrence.                
