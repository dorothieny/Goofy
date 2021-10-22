Post.destroy_all

puts "Destroyed everything you touch"

posts = [
    {
	title: "Стойки и падения",
	time: "около 20 минут",
    level: "легко",
    description: "Чтобы хорошо покататься, надо сначала научиться уверенно стоять",
	content: "Встаньте прямо. Затем встаньте правой ногой на доску. Занесите вторую ногу на доску. Попробуйте держать центр тяжести там же где центр доски. Попрубуйте держать центр тяжести там же где центр доски",
    image: File.open(Rails.root.join('public', 'images', 'fall.jpg'))
    },
{
	title: "Олли",
	time: "около 1 часа",
    level: "средне",
    description: "Первый серьезный трюк",
	content: "Пока нет...",
    image: File.open(Rails.root.join('public', 'images', 'ollie.jpg'))
},
{
    title: "Кик-флип",
	time: "около 4 часов",
    level: "средне",
    description: "Кик – тут главное пинок! Не жалей своей доски",
	content: "Пока нет...",
    image: File.open(Rails.root.join('public', 'images', 'flip.jpg'))
}
]

posts.each do |post|
	postik = Post.create(post)
	puts post
	puts postik
	puts "Some magic just create a #{ postik.title } with id #{ postik.id }!"
end
