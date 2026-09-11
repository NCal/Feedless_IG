
(() => {
  const QUOTES = [
  ["The secret of getting ahead is getting started.", "Mark Twain"],
  ["You do not have to see the whole staircase, just take the first step.", "Martin Luther King Jr."],
  ["The best way out is always through.", "Robert Frost"],
  ["What you do every day matters more than what you do once in a while.", "Gretchen Rubin"],
  ["It always seems impossible until it’s done.", "Nelson Mandela"],
  ["The future depends on what you do today.", "Mahatma Gandhi"],
  ["Great things are done by a series of small things brought together.", "Vincent van Gogh"],
  ["Success is the sum of small efforts, repeated day in and day out.", "Robert Collier"],
  ["Act as if what you do makes a difference. It does.", "William James"],
  ["A year from now you may wish you had started today.", "Karen Lamb"],
  ["Do the thing you think you cannot do.", "Eleanor Roosevelt"],
  ["Well done is better than well said.", "Benjamin Franklin"],
  ["The journey of a thousand miles begins with one step.", "Lao Tzu"],
  ["Whether you think you can or you think you can't, you're right.", "Henry Ford"],
  ["It does not matter how slowly you go as long as you do not stop.", "Confucius"],
  ["Believe you can and you're halfway there.", "Theodore Roosevelt"],
  ["Everything you've ever wanted is on the other side of fear.", "George Addair"],
  ["The only way to do great work is to love what you do.", "Steve Jobs"],
  ["Don't watch the clock; do what it does. Keep going.", "Sam Levenson"],
  ["Start where you are. Use what you have. Do what you can.", "Arthur Ashe"],
  ["The harder I work, the luckier I get.", "Samuel Goldwyn"],
  ["Success usually comes to those who are too busy to be looking for it.", "Henry David Thoreau"],
  ["Don't be afraid to give up the good to go for the great.", "John D. Rockefeller"],
  ["The only impossible journey is the one you never begin.", "Tony Robbins"],
  ["You miss 100% of the shots you don't take.", "Wayne Gretzky"],
  ["If opportunity doesn't knock, build a door.", "Milton Berle"],
  ["The mind is everything. What you think you become.", "Buddha"],
  ["Whatever you are, be a good one.", "Abraham Lincoln"],
  ["If you can dream it, you can do it.", "Walt Disney"],
  ["Keep your eyes on the stars, and your feet on the ground.", "Theodore Roosevelt"],
  ["The future belongs to those who believe in the beauty of their dreams.", "Eleanor Roosevelt"],
  ["It is never too late to be what you might have been.", "George Eliot"],
  ["You are never too old to set another goal or to dream a new dream.", "C. S. Lewis"],
  ["Do what you can, with what you have, where you are.", "Theodore Roosevelt"],
  ["Great things never come from comfort zones.", "Unknown"],
  ["Dream big and dare to fail.", "Norman Vaughan"],
  ["The only limit to our realization of tomorrow is our doubts of today.", "Franklin D. Roosevelt"],
  ["Energy and persistence conquer all things.", "Benjamin Franklin"],
  ["Perseverance is not a long race; it is many short races one after another.", "Walter Elliot"],
  ["Fall seven times and stand up eight.", "Japanese Proverb"],
  ["A little progress each day adds up to big results.", "Unknown"],
  ["Success is not final; failure is not fatal: it is the courage to continue that counts.", "Winston Churchill"],
  ["Failure is simply the opportunity to begin again, this time more intelligently.", "Henry Ford"],
  ["Our greatest glory is not in never falling, but in rising every time we fall.", "Confucius"],
  ["The greatest glory in living lies not in never falling, but in rising every time we fall.", "Nelson Mandela"],
  ["You don't have to be great to start, but you have to start to be great.", "Zig Ziglar"],
  ["The way to get started is to quit talking and begin doing.", "Walt Disney"],
  ["Action is the foundational key to all success.", "Pablo Picasso"],
  ["Knowing is not enough; we must apply. Willing is not enough; we must do.", "Johann Wolfgang von Goethe"],
  ["What you do speaks so loudly that I cannot hear what you say.", "Ralph Waldo Emerson"],
  ["Do not wait; the time will never be 'just right.'", "Napoleon Hill"],
  ["You can do anything, but not everything.", "David Allen"],
  ["Focus on being productive instead of busy.", "Tim Ferriss"],
  ["The successful warrior is the average man, with laser-like focus.", "Bruce Lee"],
  ["Concentrate all your thoughts upon the work at hand.", "Alexander Graham Bell"],
  ["Either you run the day, or the day runs you.", "Jim Rohn"],
  ["Lack of direction, not lack of time, is the problem.", "Zig Ziglar"],
  ["The key is not to prioritize what's on your schedule, but to schedule your priorities.", "Stephen Covey"],
  ["Ordinary things done consistently produce extraordinary results.", "Unknown"],
  ["Small disciplines repeated with consistency every day lead to great achievements.", "John C. Maxwell"],
  ["We are what we repeatedly do. Excellence, then, is not an act, but a habit.", "Will Durant"],
  ["Motivation gets you started. Habit keeps you going.", "Jim Ryun"],
  ["Discipline is choosing between what you want now and what you want most.", "Abraham Lincoln"],
  ["We must all suffer one of two things: the pain of discipline or the pain of regret.", "Jim Rohn"],
  ["The pain you feel today will be the strength you feel tomorrow.", "Arnold Schwarzenegger"],
  ["You have power over your mind—not outside events. Realize this, and you will find strength.", "Marcus Aurelius"],
  ["Waste no more time arguing what a good person should be. Be one.", "Marcus Aurelius"],
  ["The impediment to action advances action. What stands in the way becomes the way.", "Marcus Aurelius"],
  ["He who has a why to live can bear almost any how.", "Friedrich Nietzsche"],
  ["Nothing in life is to be feared; it is only to be understood.", "Marie Curie"],
  ["The future is always modifiable.", "Unknown"],
  ["If you want to fly, give up everything that weighs you down.", "Toni Morrison"],
  ["You have to expect things of yourself before you can do them.", "Michael Jordan"],
  ["I've failed over and over and over again in my life. And that is why I succeed.", "Michael Jordan"],
  ["Some people want it to happen, some wish it would happen, others make it happen.", "Michael Jordan"],
  ["Obstacles don't have to stop you. If you run into a wall, don't turn around and give up.", "Michael Jordan"],
  ["You can't build a reputation on what you are going to do.", "Henry Ford"],
  ["Quality means doing it right when no one is looking.", "Henry Ford"],
  ["Whether it's the best of times or the worst of times, it's the only time we've got.", "Art Buchwald"],
  ["The man who moves a mountain begins by carrying away small stones.", "Confucius"],
  ["Knowing others is intelligence; knowing yourself is true wisdom.", "Lao Tzu"],
  ["A journey of a thousand miles begins beneath one's feet.", "Lao Tzu"],
  ["Silence is a source of great strength.", "Lao Tzu"],
  ["When you realize there is nothing lacking, the whole world belongs to you.", "Lao Tzu"],
  ["What lies behind us and what lies before us are tiny matters compared to what lies within us.", "Ralph Waldo Emerson"],
  ["Nothing great was ever achieved without enthusiasm.", "Ralph Waldo Emerson"],
  ["The only person you are destined to become is the person you decide to be.", "Ralph Waldo Emerson"],
  ["Write it on your heart that every day is the best day in the year.", "Ralph Waldo Emerson"],
  ["Once you make a decision, the universe conspires to make it happen.", "Ralph Waldo Emerson"],
  ["Happiness depends upon ourselves.", "Aristotle"],
  ["We are what we repeatedly do.", "Aristotle"],
  ["Excellence is never an accident.", "Aristotle"],
  ["The roots of education are bitter, but the fruit is sweet.", "Aristotle"],
  ["Well begun is half done.", "Aristotle"],
  ["Knowing yourself is the beginning of all wisdom.", "Aristotle"],
  ["He who conquers himself is the mightiest warrior.", "Confucius"],
  ["The will to win, the desire to succeed, the urge to reach your full potential... these are the keys.", "Confucius"],
  ["Everything has beauty, but not everyone sees it.", "Confucius"],
  ["It does not matter how slowly you go as long as you do not stop.", "Confucius"],
  ["The best time to plant a tree was 20 years ago. The second best time is now.", "Chinese Proverb"],
  ["A smooth sea never made a skilled sailor.", "Franklin D. Roosevelt"],
  ["Hardships often prepare ordinary people for an extraordinary destiny.", "C. S. Lewis"],
  ["Courage, dear heart.", "C. S. Lewis"],
  ["You are never too old to set another goal.", "C. S. Lewis"],
  ["There is no failure except in no longer trying.", "Elbert Hubbard"],
  ["A goal without a plan is just a wish.", "Antoine de Saint-Exupéry"],
  ["Perfection is not attainable, but if we chase perfection we can catch excellence.", "Vince Lombardi"],
  ["The difference between the impossible and the possible lies in a person's determination.", "Tommy Lasorda"],
  ["Winning isn't everything, but wanting to win is.", "Vince Lombardi"],
  ["Individual commitment to a group effort—that is what makes a team work.", "Vince Lombardi"],
  ["The only place where success comes before work is in the dictionary.", "Vince Lombardi"],
  ["It's not whether you get knocked down; it's whether you get up.", "Vince Lombardi"],
  ["Do not let what you cannot do interfere with what you can do.", "John Wooden"],
  ["Make each day your masterpiece.", "John Wooden"],
  ["Success comes from knowing that you did your best to become the best that you are capable of becoming.", "John Wooden"],
  ["Things turn out best for the people who make the best of the way things turn out.", "John Wooden"],
  ["Don't let yesterday take up too much of today.", "Will Rogers"],
  ["Even if you're on the right track, you'll get run over if you just sit there.", "Will Rogers"],
  ["If you want to succeed, you should strike out on new paths, rather than travel the worn paths of accepted success.", "John D. Rockefeller"],
  ["The secret of success is to do the common thing uncommonly well.", "John D. Rockefeller"],
  ["Don't count the days, make the days count.", "Muhammad Ali"],
  ["He who is not courageous enough to take risks will accomplish nothing in life.", "Muhammad Ali"],
  ["It's hard to beat a person who never gives up.", "Babe Ruth"],
  ["Never let the fear of striking out keep you from playing the game.", "Babe Ruth"],
  ["You must expect great things of yourself before you can do them.", "Michael Jordan"],
  ["The future depends on what you do today.", "Mahatma Gandhi"],
  ["Live as if you were to die tomorrow. Learn as if you were to live forever.", "Mahatma Gandhi"],
  ["Strength does not come from physical capacity. It comes from an indomitable will.", "Mahatma Gandhi"],
  ["In a gentle way, you can shake the world.", "Mahatma Gandhi"],
  ["The difference between ordinary and extraordinary is that little extra.", "Jimmy Johnson"],
  ["Don't limit your challenges. Challenge your limits.", "Jerry Dunn"],
  ["A champion is defined not by their wins but by how they can recover when they fall.", "Serena Williams"],
  ["Luck is what happens when preparation meets opportunity.", "Seneca"],
  ["Difficulties strengthen the mind, as labor does the body.", "Seneca"],
  ["Luck is what happens when preparation meets opportunity.", "Seneca"],
  ["We suffer more often in imagination than in reality.", "Seneca"],
  ["Begin at once to live, and count each separate day as a separate life.", "Seneca"],
  ["It is not that we have a short time to live, but that we waste a lot of it.", "Seneca"],
  ["No man is more unhappy than he who never faces adversity.", "Seneca"],
  ["If one advances confidently in the direction of his dreams, he will meet with a success unexpected in common hours.", "Henry David Thoreau"],
  ["Go confidently in the direction of your dreams. Live the life you've imagined.", "Henry David Thoreau"],
  ["It's not what you look at that matters, it's what you see.", "Henry David Thoreau"],
  ["How vain it is to sit down to write when you have not stood up to live.", "Henry David Thoreau"],
  ["Do not go where the path may lead; go instead where there is no path and leave a trail.", "Ralph Waldo Emerson"],
  ["The only way to have a friend is to be one.", "Ralph Waldo Emerson"],
  ["For every minute you are angry you lose sixty seconds of happiness.", "Ralph Waldo Emerson"],
  ["Nothing can bring you peace but yourself.", "Ralph Waldo Emerson"],
  ["Adopt the pace of nature: her secret is patience.", "Ralph Waldo Emerson"],
  ["Once you choose hope, anything's possible.", "Christopher Reeve"],
  ["A hero is an ordinary individual who finds the strength to persevere and endure in spite of overwhelming obstacles.", "Christopher Reeve"],
  ["You gain strength, courage, and confidence by every experience in which you really stop to look fear in the face.", "Eleanor Roosevelt"],
  ["Do one thing every day that scares you.", "Eleanor Roosevelt"],
  ["The future belongs to those who believe in the beauty of their dreams.", "Eleanor Roosevelt"],
  ["No one can make you feel inferior without your consent.", "Eleanor Roosevelt"],
  ["The purpose of life is to live it, to taste experience to the utmost.", "Eleanor Roosevelt"],
  ["It is during our darkest moments that we must focus to see the light.", "Aristotle"],
  ["Hope is a waking dream.", "Aristotle"],
  ["Pleasure in the job puts perfection in the work.", "Aristotle"],
  ["The energy of the mind is the essence of life.", "Aristotle"],
  ["You become what you give your attention to.", "Epictetus"],
  ["It's not what happens to you, but how you react to it that matters.", "Epictetus"],
  ["First say to yourself what you would be; and then do what you have to do.", "Epictetus"],
  ["No great thing is created suddenly.", "Epictetus"],
  ["Freedom is the only worthy goal in life.", "Epictetus"],
  ["Don't explain your philosophy. Embody it.", "Epictetus"],
  ["We cannot choose our external circumstances, but we can always choose how we respond to them.", "Epictetus"],
  ["The obstacle is the way.", "Marcus Aurelius"],
  ["Your life is what your thoughts make it.", "Marcus Aurelius"],
  ["The happiness of your life depends upon the quality of your thoughts.", "Marcus Aurelius"],
  ["If it is not right, do not do it; if it is not true, do not say it.", "Marcus Aurelius"],
  ["The soul becomes dyed with the color of its thoughts.", "Marcus Aurelius"],
  ["You have power over your mind, not outside events.", "Marcus Aurelius"],
  ["Be tolerant with others and strict with yourself.", "Marcus Aurelius"],
  ["The best revenge is to be unlike him who performed the injury.", "Marcus Aurelius"],
  ["Do every act of your life as though it were the last act of your life.", "Marcus Aurelius"],
  ["What we do now echoes in eternity.", "Marcus Aurelius"],
  ["Waste no more time arguing about what a good man should be. Be one.", "Marcus Aurelius"],
  ["The present moment is all you ever have.", "Eckhart Tolle"],
  ["Whatever the present moment contains, accept it as if you had chosen it.", "Eckhart Tolle"],
  ["Realize deeply that the present moment is all you have.", "Eckhart Tolle"],
  ["Acknowledging the good that you already have in your life is the foundation for all abundance.", "Eckhart Tolle"],
  ["The primary cause of unhappiness is never the situation but your thoughts about it.", "Eckhart Tolle"],
  ["The greatest weapon against stress is our ability to choose one thought over another.", "William James"],
  ["Act as if what you do makes a difference. It does.", "William James"],
  ["My experience is what I agree to attend to.", "William James"],
  ["Nothing is so fatiguing as the eternal hanging on of an uncompleted task.", "William James"],
  ["The greatest discovery of my generation is that a human being can alter his life by altering his attitudes.", "William James"],
  ["You can't use up creativity. The more you use, the more you have.", "Maya Angelou"],
  ["Nothing will work unless you do.", "Maya Angelou"],
  ["My mission in life is not merely to survive, but to thrive.", "Maya Angelou"],
  ["Try to be a rainbow in someone's cloud.", "Maya Angelou"],
  ["We may encounter many defeats but we must not be defeated.", "Maya Angelou"],
  ["If you don't like something, change it. If you can't change it, change your attitude.", "Maya Angelou"],
  ["Do the best you can until you know better. Then when you know better, do better.", "Maya Angelou"],
  ["You may not control all the events that happen to you, but you can decide not to be reduced by them.", "Maya Angelou"],
  ["Success is liking yourself, liking what you do, and liking how you do it.", "Maya Angelou"],
  ["Nothing can dim the light that shines from within.", "Maya Angelou"],
  ["You are your best thing.", "Toni Morrison"],
  ["Freeing yourself was one thing; claiming ownership of that freed self was another.", "Toni Morrison"],
  ["If there's a book that you want to read, but it hasn't been written yet, then you must write it.", "Toni Morrison"],
  ["Definitions belong to the definers, not the defined.", "Toni Morrison"],
  ["If you surrender to the wind, you can ride it.", "Toni Morrison"],
  ["You can't wait for inspiration. You have to go after it with a club.", "Jack London"],
  ["You must go on a long journey before you can really find out how wonderful home is.", "Jack London"],
  ["Life is not a matter of holding good cards, but sometimes playing a poor hand well.", "Jack London"],
  ["I would rather be ashes than dust.", "Jack London"],
  ["You have to dream before your dreams can come true.", "Abdul Kalam"],
  ["Dream, dream, dream. Dreams transform into thoughts and thoughts result in action.", "Abdul Kalam"],
  ["Excellence is a continuous process and not an accident.", "Abdul Kalam"],
  ["Man needs his difficulties because they are necessary to enjoy success.", "Abdul Kalam"],
  ["Don't take rest after your first victory because if you fail in second, more lips are waiting to say that your first victory was just luck.", "Abdul Kalam"],
  ["If you want to shine like a sun, first burn like a sun.", "Abdul Kalam"],
  ["The only way of discovering the limits of the possible is to venture a little way past them into the impossible.", "Arthur C. Clarke"],
  ["Any sufficiently advanced technology is indistinguishable from magic.", "Arthur C. Clarke"],
  ["The greatest enemy of knowledge is not ignorance, it is the illusion of knowledge.", "Stephen Hawking"],
  ["However difficult life may seem, there is always something you can do and succeed at.", "Stephen Hawking"],
  ["Intelligence is the ability to adapt to change.", "Stephen Hawking"],
  ["Look up at the stars and not down at your feet.", "Stephen Hawking"],
  ["Quiet people have the loudest minds.", "Stephen Hawking"],
  ["Somewhere, something incredible is waiting to be known.", "Carl Sagan"],
  ["We are a way for the cosmos to know itself.", "Carl Sagan"],
  ["Extraordinary claims require extraordinary evidence.", "Carl Sagan"],
  ["The cosmos is within us. We are made of star-stuff.", "Carl Sagan"],
  ["Books permit each of us to enter the mind of another person.", "Carl Sagan"],
  ["The important thing is not to stop questioning.", "Albert Einstein"],
  ["Life is like riding a bicycle. To keep your balance, you must keep moving.", "Albert Einstein"],
  ["Imagination is more important than knowledge.", "Albert Einstein"],
  ["In the middle of difficulty lies opportunity.", "Albert Einstein"],
  ["A person who never made a mistake never tried anything new.", "Albert Einstein"],
  ["Strive not to be a success, but rather to be of value.", "Albert Einstein"],
  ["Once you stop learning, you start dying.", "Albert Einstein"],
  ["Everything should be made as simple as possible, but not simpler.", "Albert Einstein"],
  ["The important thing is to never stop asking questions.", "Albert Einstein"],
  ["I have no special talent. I am only passionately curious.", "Albert Einstein"],
  ["If you want to find the secrets of the universe, think in terms of energy, frequency and vibration.", "Nikola Tesla"],
  ["The present is theirs; the future, for which I really worked, is mine.", "Nikola Tesla"],
  ["The scientists of today think deeply instead of clearly.", "Nikola Tesla"],
  ["The individual is ephemeral, races and nations come and pass away, but humanity remains.", "Nikola Tesla"],
  ["What we know is a drop, what we don't know is an ocean.", "Isaac Newton"],
  ["If I have seen further it is by standing on the shoulders of giants.", "Isaac Newton"],
  ["Tact is the art of making a point without making an enemy.", "Isaac Newton"],
  ["To myself I seem to have been only like a boy playing on the seashore.", "Isaac Newton"],
  ["I never lose. I either win or learn.", "Nelson Mandela"],
  ["Education is the most powerful weapon which you can use to change the world.", "Nelson Mandela"],
  ["It always seems impossible until it's done.", "Nelson Mandela"],
  ["A winner is a dreamer who never gives up.", "Nelson Mandela"],
  ["There is no passion to be found playing small and settling for a life that's less than the one you're capable of living.", "Nelson Mandela"],
  ["May your choices reflect your hopes, not your fears.", "Nelson Mandela"],
  ["After climbing a great hill, one only finds that there are many more hills to climb.", "Nelson Mandela"],
  ["Do not judge me by my successes; judge me by how many times I fell down and got back up again.", "Nelson Mandela"],
  ["We must use time wisely and forever realize that the time is always ripe to do right.", "Nelson Mandela"],
  ["The greatest glory in living lies not in never falling, but in rising every time we fall.", "Nelson Mandela"],
  ["A winner is just a loser who tried one more time.", "George M. Moore Jr."],
  ["Success is walking from failure to failure with no loss of enthusiasm.", "Winston Churchill"],
  ["If you're going through hell, keep going.", "Winston Churchill"],
  ["Kites rise highest against the wind, not with it.", "Winston Churchill"],
  ["Attitude is a little thing that makes a big difference.", "Winston Churchill"],
  ["We make a living by what we get, but we make a life by what we give.", "Winston Churchill"],
  ["Continuous effort—not strength or intelligence—is the key to unlocking our potential.", "Winston Churchill"],
  ["Never, never, never give up.", "Winston Churchill"],
  ["To improve is to change; to be perfect is to change often.", "Winston Churchill"],
  ["Courage is going from failure to failure without losing enthusiasm.", "Winston Churchill"],
  ["The pessimist sees difficulty in every opportunity. The optimist sees opportunity in every difficulty.", "Winston Churchill"],
  ["If you are going through hell, keep going.", "Winston Churchill"],
  ["You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose.", "Dr. Seuss"],
  ["Today you are you! That is truer than true!", "Dr. Seuss"],
  ["Why fit in when you were born to stand out?", "Dr. Seuss"],
  ["Sometimes you will never know the value of a moment until it becomes a memory.", "Dr. Seuss"],
  ["Unless someone like you cares a whole awful lot, nothing is going to get better.", "Dr. Seuss"],
  ["Only those who will risk going too far can possibly find out how far one can go.", "T. S. Eliot"],
  ["If you do not push the boundaries, you will never know where they are.", "T. S. Eliot"],
  ["What we call the beginning is often the end. And to make an end is to make a beginning.", "T. S. Eliot"],
  ["Do I dare disturb the universe?", "T. S. Eliot"],
  ["Not all those who wander are lost.", "J. R. R. Tolkien"],
  ["All we have to decide is what to do with the time that is given us.", "J. R. R. Tolkien"],
  ["Courage will now be your best defence against the storm that is at hand.", "J. R. R. Tolkien"],
  ["There is some good in this world, and it's worth fighting for.", "J. R. R. Tolkien"],
  ["Little by little, one travels far.", "J. R. R. Tolkien"],
  ["The world is full of magic things, patiently waiting for our senses to grow sharper.", "W. B. Yeats"],
  ["Do not wait to strike till the iron is hot; but make it hot by striking.", "William Butler Yeats"],
  ["There are no strangers here; Only friends you haven't yet met.", "William Butler Yeats"],
  ["Think where man's glory most begins and ends, and say my glory was I had such friends.", "William Butler Yeats"],
  ["Hope is the thing with feathers that perches in the soul.", "Emily Dickinson"],
  ["Forever is composed of nows.", "Emily Dickinson"],
  ["If I can stop one heart from breaking, I shall not live in vain.", "Emily Dickinson"],
  ["That it will never come again is what makes life so sweet.", "Emily Dickinson"],
  ["Unable are the loved to die. For love is immortality.", "Emily Dickinson"],
  ["Keep your face always toward the sunshine—and shadows will fall behind you.", "Walt Whitman"],
  ["Do anything, but let it produce joy.", "Walt Whitman"],
  ["Be curious, not judgmental.", "Walt Whitman"],
  ["I sound my barbaric yawp over the roofs of the world.", "Walt Whitman"],
  ["Re-examine all you have been told. Dismiss that which insults your soul.", "Walt Whitman"],
  ["We should be too big to take offense and too noble to give it.", "Abraham Lincoln"],
  ["Whatever you are, be a good one.", "Abraham Lincoln"],
  ["I am a slow walker, but I never walk back.", "Abraham Lincoln"],
  ["You cannot escape the responsibility of tomorrow by evading it today.", "Abraham Lincoln"],
  ["Give me six hours to chop down a tree and I will spend the first four sharpening the axe.", "Abraham Lincoln"],
  ["Most folks are about as happy as they make up their minds to be.", "Abraham Lincoln"],
  ["In the end, it's not the years in your life that count. It's the life in your years.", "Abraham Lincoln"],
  ["The best thing about the future is that it comes one day at a time.", "Abraham Lincoln"],
  ["Don't find fault, find a remedy.", "Henry Ford"],
  ["Coming together is a beginning; keeping together is progress; working together is success.", "Henry Ford"],
  ["If everyone is moving forward together, then success takes care of itself.", "Henry Ford"],
  ["Thinking is the hardest work there is, which is probably the reason so few engage in it.", "Henry Ford"],
  ["You can't build your reputation on what you are going to do.", "Henry Ford"],
  ["Failure is the opportunity to begin again more intelligently.", "Henry Ford"],
  ["Whether you think you can, or you think you can't—you're right.", "Henry Ford"],
  ["A business that makes nothing but money is a poor business.", "Henry Ford"],
  ["When everything seems to be going against you, remember that the airplane takes off against the wind.", "Henry Ford"],
  ["The reward of a thing well done is having done it.", "Ralph Waldo Emerson"],
  ["The only person you are destined to become is the person you decide to be.", "Ralph Waldo Emerson"],
  ["Nothing external to you has any power over you.", "Ralph Waldo Emerson"],
  ["Shallow men believe in luck or in circumstance. Strong men believe in cause and effect.", "Ralph Waldo Emerson"],
  ["Life consists in what a man is thinking of all day.", "Ralph Waldo Emerson"],
  ["Do not follow where the path may lead. Go instead where there is no path and leave a trail.", "Ralph Waldo Emerson"],
  ["The creation of a thousand forests is in one acorn.", "Ralph Waldo Emerson"],
  ["A foolish consistency is the hobgoblin of little minds.", "Ralph Waldo Emerson"],
  ["The only way to do great work is to love what you do.", "Steve Jobs"],
  ["Your time is limited, so don't waste it living someone else's life.", "Steve Jobs"],
  ["Stay hungry. Stay foolish.", "Steve Jobs"],
  ["Innovation distinguishes between a leader and a follower.", "Steve Jobs"],
  ["Have the courage to follow your heart and intuition.", "Steve Jobs"],
  ["You can't connect the dots looking forward; you can only connect them looking backwards.", "Steve Jobs"],
  ["Creativity is just connecting things.", "Steve Jobs"],
  ["Great things in business are never done by one person. They're done by a team of people.", "Steve Jobs"],
  ["The people who are crazy enough to think they can change the world are the ones who do.", "Steve Jobs"],
  ["Sometimes life hits you in the head with a brick. Don't lose faith.", "Steve Jobs"],
  ["Stay hungry. Stay foolish.", "Steve Jobs"],
  ["If you really look closely, most overnight successes took a long time.", "Steve Jobs"],
  ["The secret of change is to focus all of your energy not on fighting the old but on building the new.", "Socrates"],
  ["The unexamined life is not worth living.", "Socrates"],
  ["I know that I am intelligent, because I know that I know nothing.", "Socrates"],
  ["Wonder is the beginning of wisdom.", "Socrates"],
  ["He who is not contented with what he has, would not be contented with what he would like to have.", "Socrates"],
  ["Be kind, for everyone you meet is fighting a hard battle.", "Plato"],
  ["Courage is knowing what not to fear.", "Plato"],
  ["Wise men speak because they have something to say; fools because they have to say something.", "Plato"],
  ["The beginning is the most important part of the work.", "Plato"],
  ["Opinion is the medium between knowledge and ignorance.", "Plato"],
  ["What you seek is seeking you.", "Rumi"],
  ["The wound is the place where the Light enters you.", "Rumi"],
  ["Let yourself be silently drawn by the strange pull of what you really love.", "Rumi"],
  ["Yesterday I was clever, so I wanted to change the world. Today I am wise, so I want to change myself.", "Rumi"],
  ["Don't grieve. Anything you lose comes round in another form.", "Rumi"],
  ["The quieter you become, the more you are able to hear.", "Rumi"],
  ["Let the beauty we love be what we do.", "Rumi"],
  ["Where there is ruin, there is hope for a treasure.", "Rumi"],
  ["Raise your words, not your voice. It is rain that grows flowers, not thunder.", "Rumi"],
  ["What you think, you become. What you feel, you attract. What you imagine, you create.", "Buddha"],
  ["The mind is everything. What you think you become.", "Buddha"],
  ["Peace comes from within. Do not seek it without.", "Buddha"],
  ["No one saves us but ourselves. No one can and no one may. We ourselves must walk the path.", "Buddha"],
  ["The only real mistake is the one from which we learn nothing.", "Henry Ford"],
  ["A goal is a dream with a deadline.", "Napoleon Hill"],
  ["Whatever the mind can conceive and believe, it can achieve.", "Napoleon Hill"],
  ["Strength and growth come only through continuous effort and struggle.", "Napoleon Hill"],
  ["Don't wait. The time will never be just right.", "Napoleon Hill"],
  ["Patience, persistence and perspiration make an unbeatable combination for success.", "Napoleon Hill"],
  ["The ladder of success is never crowded at the top.", "Napoleon Hill"],
  ["Action is the real measure of intelligence.", "Napoleon Hill"],
  ["You are what you think about all day long.", "Ralph Waldo Emerson"],
  ["A person will be about as happy as they make up their minds to be.", "Abraham Lincoln"],
  ["Do not let making a living prevent you from making a life.", "John Wooden"],
  ["Don't wish it were easier. Wish you were better.", "Jim Rohn"],
  ["Either you run the day or the day runs you.", "Jim Rohn"],
  ["Success is nothing more than a few simple disciplines, practiced every day.", "Jim Rohn"],
  ["Discipline is the bridge between goals and accomplishment.", "Jim Rohn"],
  ["Motivation is what gets you started. Habit is what keeps you going.", "Jim Ryun"],
  ["You cannot change your destination overnight, but you can change your direction overnight.", "Jim Rohn"],
  ["Don't set your goals too low. If you don't need a ladder, you won't grow.", "Jim Rohn"],
  ["Formal education will make you a living; self-education will make you a fortune.", "Jim Rohn"],
  ["Don't wish it was easier, wish you were better.", "Jim Rohn"],
  ["Success is neither magical nor mysterious. Success is the natural consequence of consistently applying the basic fundamentals.", "Jim Rohn"],
  ["The future is created by what you do today, not tomorrow.", "Robert Kiyosaki"],
  ["Your future is created by what you do today, not tomorrow.", "Robert Kiyosaki"],
  ["Don't let the fear of losing be greater than the excitement of winning.", "Robert Kiyosaki"],
  ["The richest people in the world look for and build networks; everyone else looks for work.", "Robert Kiyosaki"],
  ["It's not how much money you make, but how much money you keep.", "Robert Kiyosaki"],
  ["Losers quit when they fail. Winners fail until they succeed.", "Robert Kiyosaki"],
  ["The only difference between a rich person and a poor person is how they use their time.", "Robert Kiyosaki"],
  ["The biggest risk a person can take is to do nothing.", "Robert Kiyosaki"],
  ["Don't let winning make you soft. Don't let losing make you bitter.", "Unknown"],
  ["You don't need more time. You need more focus.", "Unknown"],
  ["The work you avoid is often the work that changes you.", "Unknown"],
  ["Your attention is your life.", "Unknown"],
  ["What you repeatedly do becomes who you are.", "Unknown"],
  ["Start before you're ready.", "Unknown"],
  ["Consistency beats intensity.", "Unknown"],
  ["Progress, not perfection.", "Unknown"],
  ["Done is better than perfect.", "Unknown"],
  ["Make it happen.", "Unknown"],
  ["Keep moving forward.", "Unknown"],
  ["One step at a time.", "Unknown"],
  ["Do the work.", "Unknown"],
  ["Build something you're proud of.", "Unknown"],
  ["Make today count.", "Unknown"],
  ["Your future self is watching.", "Unknown"],
  ["You don't have to feel motivated to act.", "Unknown"],
  ["The hardest part is starting.", "Unknown"],
  ["A bad day is not a bad life.", "Unknown"],
  ["You can start again at any moment.", "Unknown"],
  ["Don't quit on a bad day.", "Unknown"],
  ["Small steps are still steps.", "Unknown"],
  ["Progress is progress, no matter how small.", "Unknown"],
  ["You are capable of more than you think.", "Unknown"],
  ["Keep going. You're closer than you think.", "Unknown"],
  ["Make something happen today.", "Unknown"],
  ["Your habits are building your future.", "Unknown"],
  ["What gets measured gets managed.", "Peter Drucker"],
  ["The best way to predict the future is to create it.", "Peter Drucker"],
  ["There is nothing so useless as doing efficiently that which should not be done at all.", "Peter Drucker"],
  ["Knowledge has to be improved, challenged, and increased constantly, or it vanishes.", "Peter Drucker"],
  ["Efficiency is doing things right; effectiveness is doing the right things.", "Peter Drucker"],
  ["The most important thing in communication is hearing what isn't said.", "Peter Drucker"],
  ["Whenever you see a successful business, someone once made a courageous decision.", "Peter Drucker"],
  ["The best way to predict your future is to create it.", "Abraham Lincoln"],
  ["If you don't know where you are going, any road will get you there.", "Lewis Carroll"],
  ["Begin anywhere.", "John Cage"],
  ["If you can imagine it, you can achieve it; if you can dream it, you can become it.", "William Arthur Ward"],
  ["The mediocre teacher tells. The good teacher explains. The superior teacher demonstrates. The great teacher inspires.", "William Arthur Ward"],
  ["The experienced mountain climber is not intimidated by a mountain he has never climbed.", "William Arthur Ward"],
  ["Opportunities are usually disguised as hard work, so most people don't recognize them.", "Ann Landers"],
  ["Opportunities don't happen. You create them.", "Chris Grosser"],
  ["Success is where preparation and opportunity meet.", "Bobby Unser"],
  ["Don't wait for opportunity. Create it.", "George Bernard Shaw"],
  ["People who cannot find time for recreation are obliged sooner or later to find time for illness.", "John Wanamaker"],
  ["Progress is impossible without change.", "George Bernard Shaw"],
  ["Life isn't about finding yourself. Life is about creating yourself.", "George Bernard Shaw"],
  ["We don't stop playing because we grow old; we grow old because we stop playing.", "George Bernard Shaw"],
  ["A life spent making mistakes is not only more honorable, but more useful than a life spent doing nothing.", "George Bernard Shaw"],
  ["The possibilities are numerous once we decide to act and not react.", "George Bernard Shaw"],
  ["What we really want to do is what we are really meant to do.", "Julia Cameron"],
  ["Leap, and the net will appear.", "Julia Cameron"],
  ["Creativity requires courage.", "Henri Matisse"],
  ["An artist cannot fail; it is a success to be one.", "Charles Cooley"],
  ["Great things are not done by impulse, but by a series of small things brought together.", "Vincent van Gogh"],
  ["If you hear a voice within you say 'you cannot paint,' then by all means paint, and that voice will be silenced.", "Vincent van Gogh"],
  ["What would life be if we had no courage to attempt anything?", "Vincent van Gogh"],
  ["Normality is a paved road: it's comfortable to walk, but no flowers grow on it.", "Vincent van Gogh"],
  ["I am seeking. I am striving. I am in it with all my heart.", "Vincent van Gogh"],
  ["Great things are done by a series of small things brought together.", "Vincent van Gogh"],
  ["The chief enemy of creativity is good sense.", "Pablo Picasso"],
  ["Everything you can imagine is real.", "Pablo Picasso"],
  ["Action is the foundational key to all success.", "Pablo Picasso"],
  ["Learn the rules like a pro, so you can break them like an artist.", "Pablo Picasso"],
  ["Art washes away from the soul the dust of everyday life.", "Pablo Picasso"],
  ["Inspiration exists, but it has to find you working.", "Pablo Picasso"],
  ["Every child is an artist. The problem is how to remain an artist once we grow up.", "Pablo Picasso"],
  ["The purpose of art is washing the dust of daily life off our souls.", "Pablo Picasso"],
  ["If you don't ask, the answer is always no.", "Nora Roberts"],
  ["You can't go back and change the beginning, but you can start where you are and change the ending.", "C. S. Lewis"],
  ["Hardships often prepare ordinary people for an extraordinary destiny.", "C. S. Lewis"],
  ["Courage is not simply one of the virtues, but the form of every virtue at the testing point.", "C. S. Lewis"],
  ["There are far, far better things ahead than any we leave behind.", "C. S. Lewis"],
  ["You are never too old to set another goal or to dream a new dream.", "C. S. Lewis"],
  ["Humility is not thinking less of yourself, but thinking of yourself less.", "C. S. Lewis"],
  ["Integrity is doing the right thing, even when no one is watching.", "C. S. Lewis"],
  ["The future is something which everyone reaches at the rate of sixty minutes an hour.", "C. S. Lewis"],
  ["Every strike brings me closer to the next home run.", "Babe Ruth"],
  ["Never let the fear of striking out keep you from playing the game.", "Babe Ruth"],
  ["Baseball is a game of failure. You will fail most of the time.", "Unknown"],
  ["The more difficult the victory, the greater the happiness in winning.", "Pelé"],
  ["Success is no accident.", "Pelé"],
  ["Everything is practice.", "Pelé"],
  ["You have to fight to reach your dream. You have to sacrifice and work hard for it.", "Lionel Messi"],
  ["You can overcome anything, if and only if you love something enough.", "Lionel Messi"],
  ["There are more important things in life than winning or losing a game.", "Lionel Messi"],
  ["The harder the conflict, the more glorious the triumph.", "Thomas Paine"],
  ["The harder the conflict, the greater the triumph.", "George Washington"],
  ["Perseverance and spirit have done wonders in all ages.", "George Washington"],
  ["99 percent of the failures come from people who make excuses.", "George Washington Carver"],
  ["Education is the key that unlocks the golden door of freedom.", "George Washington Carver"],
  ["Start where you are, with what you have. Make something of it and never be satisfied.", "George Washington Carver"],
  ["Where there is no vision, there is no hope.", "George Washington Carver"],
  ["Nothing will work unless you do.", "Maya Angelou"],
  ["The best way out is always through.", "Robert Frost"],
  ["In three words I can sum up everything I've learned about life: it goes on.", "Robert Frost"],
  ["The only way forward is through.", "Robert Frost"],
  ["Education is not preparation for life; education is life itself.", "John Dewey"],
  ["Arriving at one goal is the starting point to another.", "John Dewey"],
  ["We do not learn from experience. We learn from reflecting on experience.", "John Dewey"],
  ["Failure is instructive. The person who really thinks learns quite as much from his failures as from his successes.", "John Dewey"],
  ["Every great advance in science has issued from a new audacity of imagination.", "John Dewey"],
  ["A problem well put is half solved.", "John Dewey"],
  ["The good life is one inspired by love and guided by knowledge.", "Bertrand Russell"],
  ["The only thing that will redeem mankind is cooperation.", "Bertrand Russell"],
  ["The trouble with the world is that the stupid are cocksure and the intelligent are full of doubt.", "Bertrand Russell"],
  ["The secret of happiness is to face the fact that the world is horrible, horrible, horrible.", "Bertrand Russell"],
  ["To be without some of the things you want is an indispensable part of happiness.", "Bertrand Russell"],
  ["The greatest challenge to any thinker is stating the problem in a way that will allow a solution.", "Bertrand Russell"],
  ["Do not fear to be eccentric in opinion, for every opinion now accepted was once eccentric.", "Bertrand Russell"],
  ["The future is always beginning now.", "Mark Strand"],
  ["Don't be pushed around by the fears in your mind. Be led by the dreams in your heart.", "Roy T. Bennett"],
  ["Do what is right, not what is easy nor what is popular.", "Roy T. Bennett"],
  ["It's your road, and yours alone. Others may walk it with you, but no one can walk it for you.", "Rumi"],
  ["Be brave enough to live life creatively.", "Maya Angelou"],
  ["Nothing can dim the light that shines from within.", "Maya Angelou"],
  ["You alone are enough. You have nothing to prove to anybody.", "Maya Angelou"],
  ["You may encounter many defeats, but you must not be defeated.", "Maya Angelou"],
  ["Success likes yourself, liking what you do, and liking how you do it.", "Maya Angelou"],
  ["Turn your wounds into wisdom.", "Oprah Winfrey"],
  ["The biggest adventure you can take is to live the life of your dreams.", "Oprah Winfrey"],
  ["Create the highest, grandest vision possible for your life, because you become what you believe.", "Oprah Winfrey"],
  ["You get in life what you have the courage to ask for.", "Oprah Winfrey"],
  ["Doing the best at this moment puts you in the best place for the next moment.", "Oprah Winfrey"],
  ["The greatest discovery of all time is that a person can change his future by merely changing his attitude.", "Oprah Winfrey"],
  ["The way to achieve your own success is to be willing to help somebody else get it first.", "Iyanla Vanzant"],
  ["Comparison is the thief of joy.", "Theodore Roosevelt"],
  ["Believe you can and you're halfway there.", "Theodore Roosevelt"],
  ["Keep your eyes on the stars, and your feet on the ground.", "Theodore Roosevelt"],
  ["Far and away the best prize that life offers is the chance to work hard at work worth doing.", "Theodore Roosevelt"],
  ["Nothing in the world is worth having or worth doing unless it means effort, pain, difficulty.", "Theodore Roosevelt"],
  ["Do what you can, with what you have, where you are.", "Theodore Roosevelt"],
  ["Speak softly and carry a big stick.", "Theodore Roosevelt"],
  ["People ask the difference between a leader and a boss. The leader leads, and the boss drives.", "Theodore Roosevelt"],
  ["The credit belongs to the man who is actually in the arena.", "Theodore Roosevelt"],
  ["No man is above the law and no man is below it.", "Theodore Roosevelt"],
  ["The best preparation for tomorrow is doing your best today.", "H. Jackson Brown Jr."],
  ["Don't work for recognition, but do work worthy of recognition.", "H. Jackson Brown Jr."],
  ["Remember that the happiest people are not those getting more, but those giving more.", "H. Jackson Brown Jr."],
  ["Never give up on something that you can't go a day without thinking about.", "Winston Churchill"],
  ["If you can find a path with no obstacles, it probably doesn't lead anywhere.", "Frank A. Clark"],
  ["The expert in anything was once a beginner.", "Helen Hayes"],
  ["You don't have to be perfect to be amazing.", "Unknown"],
  ["The difference between who you are and who you want to be is what you do.", "Unknown"],
  ["If it matters to you, you'll find a way.", "Charlie Gilkey"],
  ["Don't let perfect be the enemy of good.", "Voltaire"],
  ["Judge a man by his questions rather than his answers.", "Voltaire"],
  ["Work banishes those three great evils: boredom, vice, and poverty.", "Voltaire"],
  ["Those who can imagine anything can create the impossible.", "Alan Turing"],
  ["Sometimes it is the people no one imagines anything of who do the things no one can imagine.", "Alan Turing"],
  ["We can only see a short distance ahead, but we can see plenty there that needs to be done.", "Alan Turing"],
  ["Machines take me by surprise with great frequency.", "Alan Turing"],
  ["The secret of creativity is knowing how to hide your sources.", "Albert Einstein"],
  ["Creativity is intelligence having fun.", "Albert Einstein"],
  ["Logic will get you from A to B. Imagination will take you everywhere.", "Albert Einstein"],
  ["The measure of intelligence is the ability to change.", "Albert Einstein"],
  ["A happy man is one who can successfully distinguish between the two.", "Unknown"],
  ["Don't be afraid of being different. Be afraid of being the same as everyone else.", "Unknown"],
  ["Your life does not get better by chance. It gets better by change.", "Jim Rohn"],
  ["Either you will find a way, or an excuse.", "Unknown"],
  ["If you want something you've never had, you must be willing to do something you've never done.", "Thomas Jefferson"],
  ["Do what you feel in your heart to be right—for you'll be criticized anyway.", "Eleanor Roosevelt"],
  ["Nothing is impossible; the word itself says 'I'm possible!'", "Audrey Hepburn"],
  ["The most difficult thing is the decision to act, the rest is merely tenacity.", "Amelia Earhart"],
  ["Adventure is worthwhile in itself.", "Amelia Earhart"],
  ["Never interrupt someone doing what you said couldn't be done.", "Amelia Earhart"],
  ["Preparation, I have often said, is rightly two-thirds of any venture.", "Amelia Earhart"],
  ["The woman who can create her own job is the woman who will win fame and fortune.", "Amelia Earhart"],
  ["You cannot swim for new horizons until you have courage to lose sight of the shore.", "William Faulkner"],
  ["Don't bother just to be better than your contemporaries or predecessors. Try to be better than yourself.", "William Faulkner"],
  ["Dreams are the seedlings of realities.", "James Allen"],
  ["As a man thinketh in his heart so is he.", "James Allen"],
  ["You are today where your thoughts have brought you; you will be tomorrow where your thoughts take you.", "James Allen"],
  ["Circumstances do not make the man, they reveal him.", "James Allen"],
  ["The strongest oak of the forest is not the one that is protected from the storm.", "Unknown"],
  ["A river cuts through rock not because of its power but because of its persistence.", "James N. Watkins"],
  ["Great things are done when men and mountains meet.", "William Blake"],
  ["No bird soars too high if he soars with his own wings.", "William Blake"],
  ["The busy bee has no time for sorrow.", "William Blake"],
  ["You never know how strong you are until being strong is your only choice.", "Bob Marley"],
  ["Love the life you live. Live the life you love.", "Bob Marley"],
  ["One good thing about music, when it hits you, you feel no pain.", "Bob Marley"],
  ["The truth is, everyone is going to hurt you. You just got to find the ones worth suffering for.", "Bob Marley"],
  ["Open your eyes, look within. Are you satisfied with the life you're living?", "Bob Marley"],
  ["You have to get lost before you can be found.", "Jeff Rasley"],
  ["The world is yours to explore.", "Unknown"],
  ["Every exit is an entry somewhere else.", "Tom Stoppard"],
  ["We travel not to escape life, but for life not to escape us.", "Robyn Davidson"],
  ["Not all who wander are lost.", "J. R. R. Tolkien"],
  ["Wherever you go, go with all your heart.", "Confucius"],
  ["The journey matters more than the destination.", "Unknown"],
  ["There is no path to happiness. Happiness is the path.", "Buddha"],
  ["The only journey is the one within.", "Rainer Maria Rilke"],
  ["Live your life and forget your age.", "Norman Vincent Peale"],
  ["Shoot for the moon. Even if you miss, you'll land among the stars.", "Norman Vincent Peale"],
  ["Change your thoughts and you change your world.", "Norman Vincent Peale"],
  ["Believe in yourself and all that you are.", "Christian D. Larson"],
  ["Believe in yourself, and the world will believe in you.", "Unknown"],
  ["What you think, you become.", "Buddha"],
  ["Where focus goes, energy flows.", "Tony Robbins"],
  ["Setting goals is the first step in turning the invisible into the visible.", "Tony Robbins"],
  ["Identify your problems but give your power and energy to solutions.", "Tony Robbins"],
  ["The only impossible journey is the one you never begin.", "Tony Robbins"],
  ["It's not about the goal. It's about growing to become the person that can accomplish that goal.", "Tony Robbins"],
  ["Change happens when the pain of staying the same is greater than the pain of change.", "Tony Robbins"],
  ["Success leaves clues.", "Tony Robbins"],
  ["Every problem is a gift—without problems we would not grow.", "Tony Robbins"],
  ["If you do what you've always done, you'll get what you've always gotten.", "Tony Robbins"],
  ["You are never going to be 100% ready. Just start.", "Unknown"],
  ["The first step is always the hardest.", "Unknown"],
  ["Start small. Think big.", "Unknown"],
  ["Make progress inevitable.", "Unknown"],
  ["Do something today your future self will thank you for.", "Unknown"],
  ["Your future self will thank you.", "Unknown"],
  ["One day or day one. You decide.", "Unknown"],
  ["Don't wait for the perfect moment. Take the moment and make it perfect.", "Unknown"],
  ["A year from now, you'll wish you had started today.", "Karen Lamb"],
  ["The best time to start was yesterday. The next best time is now.", "Unknown"],
  ["You don't need permission to begin.", "Unknown"],
  ["Your potential is not a deadline.", "Unknown"],
  ["The work compounds.", "Unknown"],
  ["Keep showing up.", "Unknown"],
  ["Show up. Do the work. Repeat.", "Unknown"],
  ["Consistency creates confidence.", "Unknown"],
  ["Confidence comes from keeping promises to yourself.", "Unknown"],
  ["Do it scared.", "Unknown"],
  ["Fear is a signal, not a stop sign.", "Unknown"],
  ["Don't confuse discomfort with danger.", "Unknown"],
  ["Growth begins where comfort ends.", "Unknown"],
  ["Your comfort zone is a beautiful place, but nothing ever grows there.", "Unknown"],
  ["Difficult roads often lead to beautiful destinations.", "Unknown"],
  ["The struggle you're in today is developing the strength you need tomorrow.", "Unknown"],
  ["You are allowed to be a work in progress.", "Unknown"],
  ["Progress requires patience.", "Unknown"],
  ["Be patient with yourself, but don't be passive.", "Unknown"],
  ["The goal is not to be perfect. The goal is to be better.", "Unknown"],
  ["Improve by one percent.", "Unknown"],
  ["Make the next decision a good one.", "Unknown"],
  ["Just keep moving.", "Unknown"],
  ["Forward is forward.", "Unknown"],
  ["Keep going until the answer changes.", "Unknown"],
  ["You haven't failed until you stop trying.", "Unknown"],
  ["Every attempt teaches you something.", "Unknown"],
  ["Every failure contains information.", "Unknown"],
  ["Learn. Adapt. Continue.", "Unknown"],
  ["Try again, but differently.", "Unknown"],
  ["Failure is data.", "Unknown"],
  ["Mistakes are tuition.", "Unknown"],
  ["The work teaches you how to do the work.", "Unknown"],
  ["Clarity comes from action.", "Unknown"],
  ["Action creates clarity.", "Unknown"],
  ["You don't think your way into a new life. You act your way into one.", "Unknown"],
  ["Stop planning. Start building.", "Unknown"],
  ["Ideas are cheap. Execution is everything.", "Unknown"],
  ["Make the thing.", "Unknown"],
  ["Create more than you consume.", "Unknown"],
  ["Build instead of browsing.", "Unknown"],
  ["Choose creation over consumption.", "Unknown"],
  ["Your attention is a finite resource. Spend it deliberately.", "Unknown"],
  ["What you pay attention to grows.", "Unknown"],
  ["Guard your attention.", "Unknown"],
  ["Your focus determines your reality.", "Unknown"],
  ["Where attention goes, energy flows.", "Tony Robbins"],
  ["You become what you repeatedly practice.", "Unknown"],
  ["Your habits are votes for the person you want to become.", "James Clear"],
  ["Every action you take is a vote for the person you wish to become.", "James Clear"],
  ["You do not rise to the level of your goals. You fall to the level of your systems.", "James Clear"],
  ["You should be far more concerned with your current trajectory than with your current results.", "James Clear"],
  ["Every action is a vote for the type of person you wish to become.", "James Clear"],
  ["Success is the product of daily habits—not once-in-a-lifetime transformations.", "James Clear"],
  ["You don't have to be the victim of your environment. You can also be the architect of it.", "James Clear"],
  ["Professionals stick to the schedule; amateurs let life get in the way.", "James Clear"],
  ["You should be far more concerned with your current trajectory than with your current results.", "James Clear"],
  ["Habits are the compound interest of self-improvement.", "James Clear"],
  ["Environment is the invisible hand that shapes human behavior.", "James Clear"],
  ["Every moment is a fresh beginning.", "T. S. Eliot"],
  ["This is your moment.", "Unknown"],
  ["Today is an opportunity, not an obligation.", "Unknown"],
  ["You get another chance every morning.", "Unknown"],
  ["Begin again.", "Unknown"],
  ["Begin again, as many times as necessary.", "Unknown"],
  ["There is always a next step.", "Unknown"],
  ["Take the next step.", "Unknown"],
  ["Do the next right thing.", "Unknown"],
  ["Make the next hour count.", "Unknown"],
  ["You can do hard things.", "Unknown"],
  ["Hard things become easier with practice.", "Unknown"],
  ["The thing you are avoiding may be the thing you need most.", "Unknown"],
  ["The mountain gets smaller with every step.", "Unknown"],
  ["You don't need to conquer the mountain today. Just climb.", "Unknown"],
  ["Keep climbing.", "Unknown"],
  ["The view is worth the climb.", "Unknown"],
  ["There is no substitute for persistence.", "Unknown"],
  ["Persistence turns possibility into reality.", "Unknown"],
  ["Keep your promise to yourself.", "Unknown"],
  ["Your word to yourself matters.", "Unknown"],
  ["Respect yourself enough to keep going.", "Unknown"],
  ["Become someone you respect.", "Unknown"],
  ["Build a life you don't need to escape from.", "Unknown"],
  ["Don't trade your future for temporary comfort.", "Unknown"],
  ["Short-term discomfort can buy long-term freedom.", "Unknown"],
  ["Choose the difficult right over the easy wrong.", "Unknown"],
  ["The easy choice today can become the hard life tomorrow.", "Unknown"],
  ["The hard choice today can become the easy life tomorrow.", "Unknown"],
  ["You are building something every day. Make sure it's the life you want.", "Unknown"],
  ["Your life is the result of your choices.", "Unknown"],
  ["You can change your choices.", "Unknown"],
  ["Change one thing.", "Unknown"],
  ["Start with what you control.", "Unknown"],
  ["Control what you can. Release what you can't.", "Unknown"],
  ["Don't spend your energy fighting reality. Use it to change what you can.", "Unknown"],
  ["Focus on what you can do next.", "Unknown"],
  ["The next move is yours.", "Unknown"],
  ["You are not stuck. You are at a decision point.", "Unknown"],
  ["There is always something you can do.", "Unknown"],
  ["Make yourself useful.", "Unknown"],
  ["Leave things better than you found them.", "Unknown"],
  ["Be the person who makes things better.", "Unknown"],
  ["Do something meaningful.", "Unknown"],
  ["Make something that matters.", "Unknown"],
  ["Your work can matter.", "Unknown"],
  ["The world needs what only you can make.", "Unknown"],
  ["There is work only you can do.", "Unknown"],
  ["Don't die with your music still inside you.", "Wayne Dyer"],
  ["If you have a talent, use it.", "Unknown"],
  ["Your gifts are meant to be used.", "Unknown"],
  ["Make your potential real.", "Unknown"],
  ["Potential means nothing without action.", "Unknown"],
  ["Talent gets you started. Discipline keeps you there.", "Unknown"],
  ["Skill is built, not discovered.", "Unknown"],
  ["You can become good at almost anything with enough deliberate practice.", "Unknown"],
  ["The master has failed more times than the beginner has tried.", "Unknown"],
  ["Practice makes progress.", "Unknown"],
  ["Repetition creates mastery.", "Unknown"],
  ["Learn something every day.", "Unknown"],
  ["Stay curious.", "Unknown"],
  ["Ask better questions.", "Unknown"],
  ["Be willing to be a beginner.", "Unknown"],
  ["The beginner you are today can become the expert you need tomorrow.", "Unknown"],
  ["You don't need to know everything. You need to keep learning.", "Unknown"],
  ["Learn, build, improve.", "Unknown"],
  ["Think clearly. Act deliberately.", "Unknown"],
  ["Simplify.", "Unknown"],
  ["Focus on what matters.", "Unknown"],
  ["Do less, better.", "Unknown"],
  ["Make room for what matters.", "Unknown"],
  ["Protect your time.", "Unknown"],
  ["Protect your attention.", "Unknown"],
  ["Spend your time like it matters.", "Unknown"],
  ["Your time is your life.", "Unknown"],
  ["You can always make more money. You cannot make more time.", "Unknown"],
  ["The days are long, but the years are short.", "Gretchen Rubin"],
  ["How we spend our days is, of course, how we spend our lives.", "Annie Dillard"],
  ["Go confidently in the direction of your dreams.", "Henry David Thoreau"],
  ["Live deliberately.", "Henry David Thoreau"],
  ["Simplify, simplify.", "Henry David Thoreau"],
  ["However mean your life is, meet it and live it.", "Henry David Thoreau"]

  ];


const host = location.hostname;

// --------------------------------------------------
// QUOTES
// --------------------------------------------------

function getRandomQuote() {
  return QUOTES[Math.floor(Math.random() * QUOTES.length)];
}

// --------------------------------------------------
// INSTAGRAM PAGE DETECTION
// --------------------------------------------------

function getPath() {
  // Normalize:
  // "/"          -> "/"
  // "/explore/"  -> "/explore"
  // "/reels/"    -> "/reels"
  return location.pathname.replace(/\/+$/, "") || "/";
}

function isInstagram() {
  return host.includes("instagram.com");
}

function isFeedPage() {
  if (!isInstagram()) return false;

  const path = getPath();

  // Only the Home page is treated as the quote feed.
  // Reels are blocked and redirected to Home.
  return path === "/";
}

function isReelsPage() {
  if (!isInstagram()) return false;

  const path = getPath();

  return (
    path === "/reels" ||
    path.startsWith("/reels/")
  );
}

function isExplorePage() {
  if (!isInstagram()) return false;

  const path = getPath();

  return (
    path === "/explore" ||
    path.startsWith("/explore/")
  );
}

function isExploreSearchPage() {
  if (!isExplorePage()) return false;

  const path = getPath();

  return path.startsWith("/explore/search");
}

// --------------------------------------------------
// BLOCK REELS
// --------------------------------------------------

function blockReelsNavigation() {
  if (!isReelsPage()) return;

  window.location.replace("https://www.instagram.com/");
}

// --------------------------------------------------
// INTERCEPT REELS CLICKS
// --------------------------------------------------

document.addEventListener(
  "click",
  (event) => {
    if (!isInstagram()) return;

    const link = event.target.closest("a");

    if (!link) return;

    const href = link.getAttribute("href");

    if (!href) return;

    /*
     * Catch Instagram's Reels link before Instagram's
     * SPA navigation gets a chance to process it.
     */
    if (
      href === "/reels" ||
      href.startsWith("/reels/")
    ) {
      event.preventDefault();
      event.stopPropagation();
      event.stopImmediatePropagation();

      window.location.replace("https://www.instagram.com/");
    }
  },
  true
);

// --------------------------------------------------
// QUOTE REPLACEMENT
// --------------------------------------------------

function createReplacement() {
  if (document.getElementById("inspiration-instead")) {
    return null;
  }

  const [text, author] = getRandomQuote();

  const wrapper = document.createElement("div");

  wrapper.id = "inspiration-instead";

  wrapper.innerHTML = `
    <div class="ii-card">
      <div class="ii-label">FEEDLESS IG</div>

      <blockquote></blockquote>

      <div class="ii-author"></div>

      <button type="button" class="ii-new">
        Another quote
      </button>

      <div class="support">
        <a
          class="ii-support"
          href="https://buymeacoffee.com/ncal"
          target="_blank"
          rel="noopener noreferrer"
        >
          ☕ Buy Me a Coffee
        </a>
      </div>
    </div>
  `;

  wrapper.querySelector("blockquote").textContent =
    `“${text}”`;

  wrapper.querySelector(".ii-author").textContent =
    `— ${author}`;

  wrapper.querySelector(".ii-new").addEventListener("click", () => {
    const [newText, newAuthor] = getRandomQuote();

    wrapper.querySelector("blockquote").textContent =
      `“${newText}”`;

    wrapper.querySelector(".ii-author").textContent =
      `— ${newAuthor}`;
  });

  return wrapper;
}

// --------------------------------------------------
// HIDE FEED
// --------------------------------------------------

function hideFeed(feed) {
  if (!feed) return;

  // Already hidden.
  if (feed.dataset.inspirationReplaced === "true") {
    return;
  }

  const replacement = createReplacement();

  if (!replacement) return;

  // Remember the original element so it can be restored
  // when the user navigates away from the feed.
  feed.dataset.inspirationReplaced = "true";

  feed.style.display = "none";

  feed.parentNode.insertBefore(
    replacement,
    feed
  );
}

// --------------------------------------------------
// RESTORE ORIGINAL PAGE
// --------------------------------------------------

function restoreFeed() {
  const replacement =
    document.getElementById("inspiration-instead");

  if (replacement) {
    replacement.remove();
  }

  const hiddenFeeds =
    document.querySelectorAll(
      '[data-inspiration-replaced="true"]'
    );

  hiddenFeeds.forEach((feed) => {
    feed.style.display = "";

    delete feed.dataset.inspirationReplaced;
  });
}

// --------------------------------------------------
// EXPLORE PAGE
// --------------------------------------------------

function hideExploreSuggestions() {
  if (!isExplorePage() || isExploreSearchPage()) {
    restoreExploreSuggestions();
    return;
  }

  const main = document.querySelector("main");

  if (!main) return;

  /*
   * On the normal Explore page, hide Instagram's
   * photo/reel recommendation tiles while leaving
   * the search interface and navigation available.
   */

  const mediaLinks = main.querySelectorAll(
    'a[href^="/p/"], a[href^="/reel/"], a[href^="/tv/"]'
  );

  mediaLinks.forEach((link) => {
    if (link.dataset.inspirationExploreHidden === "true") {
      return;
    }

    link.dataset.inspirationExploreHidden = "true";
    link.style.display = "none";
  });
}

function restoreExploreSuggestions() {
  const hiddenLinks = document.querySelectorAll(
    '[data-inspiration-explore-hidden="true"]'
  );

  hiddenLinks.forEach((link) => {
    link.style.display = "";

    delete link.dataset.inspirationExploreHidden;
  });
}

// --------------------------------------------------
// FIND INSTAGRAM FEED
// --------------------------------------------------

function findFeed() {
  if (!isFeedPage()) {
    return null;
  }

  /*
   * We intentionally use <main> here instead of hiding
   * the entire body/page.
   *
   * This keeps Instagram's navigation/sidebar available.
   */
  return document.querySelector("main");
}

// --------------------------------------------------
// MAIN ATTEMPT
// --------------------------------------------------

function attempt() {
  /*
   * If Instagram somehow reaches a Reels URL without
   * the click handler catching it, redirect immediately.
   */
  if (isReelsPage()) {
    blockReelsNavigation();
    return;
  }

  /*
   * Explore gets its own behavior:
   * keep search available, but remove the
   * default recommendation content.
   */
  if (isExplorePage()) {
    restoreFeed();
    hideExploreSuggestions();
    return;
  }

  /*
   * Normal feed page: Home.
   */
  if (isFeedPage()) {
    restoreExploreSuggestions();

    const feed = findFeed();

    if (feed) {
      hideFeed(feed);
    }

    return;
  }

  /*
   * Any other Instagram page:
   * restore everything.
   */
  restoreFeed();
  restoreExploreSuggestions();
}

// --------------------------------------------------
// SPA NAVIGATION
// --------------------------------------------------

function handleNavigation() {
  /*
   * Check immediately in case Instagram has just changed
   * the URL to a Reels page.
   */
  blockReelsNavigation();

  /*
   * Instagram changes the URL before it finishes
   * rendering the new page, so give it a moment.
   */
  setTimeout(attempt, 50);
  setTimeout(attempt, 250);
  setTimeout(attempt, 750);
}

// Browser back / forward.
window.addEventListener(
  "popstate",
  handleNavigation
);

// Instagram uses history.pushState().
const originalPushState = history.pushState;

history.pushState = function (...args) {
  const result =
    originalPushState.apply(this, args);

  handleNavigation();

  return result;
};

// Instagram may also use replaceState().
const originalReplaceState = history.replaceState;

history.replaceState = function (...args) {
  const result =
    originalReplaceState.apply(this, args);

  handleNavigation();

  return result;
};

// Fallback for Instagram URL changes that don't
// trigger pushState/replaceState/popstate.
let lastPath = location.pathname;

setInterval(() => {
  if (location.pathname !== lastPath) {
    lastPath = location.pathname;
    handleNavigation();
  }
}, 250);

// --------------------------------------------------
// DOM CHANGES
// --------------------------------------------------

/*
 * Instagram renders content dynamically.
 */
const observer = new MutationObserver(() => {
  attempt();
});

observer.observe(document.documentElement, {
  childList: true,
  subtree: true
});

// --------------------------------------------------
// INITIAL LOAD
// --------------------------------------------------

/*
 * Give Instagram time to render <main>.
 */
let attempts = 0;

const timer = setInterval(() => {
  attempt();

  attempts++;

  if (
    document.getElementById("inspiration-instead") ||
    attempts >= 30
  ) {
    clearInterval(timer);
  }
}, 500);



})(); 
