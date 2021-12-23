Post.destroy_all

puts "Destroyed everything you touch"

# posts = [
#     {
# 	title: "Стойки и падения",
# 	time: "около 20 минут",
#     level: "легко",
#     description: "Чтобы хорошо покататься, надо сначала научиться уверенно стоять",
# 	content: "Здесь вы найдете детальные инструкции и ссылки на видео-туториалы с данным трюком, но чуть позже",
#     image: File.open(Rails.root.join('public', 'images', 'fall.jpg'))
#     },
# {
# 	title: "Олли",
# 	time: "около 1 часа",
#     level: "средне",
#     description: "Первый серьезный трюк",
# 	content: "Здесь вы найдете детальные инструкции и ссылки на видео-туториалы с данным трюком, но чуть позже",
#     image: File.open(Rails.root.join('public', 'images', 'ollie.jpg'))
# },
# {
#     title: "Кик-флип",
# 	time: "около 4 часов",
#     level: "средне",
#     description: "Кик – тут главное пинок! Не жалей своей доски",
# 	content: "Здесь вы найдете детальные инструкции и ссылки на видео-туториалы с данным трюком, но чуть позже",
#     image: File.open(Rails.root.join('public', 'images', 'flip.jpg'))
# }
# ]

# posts.each do |post|
# 	postik = Post.create(post)
# 	puts post
# 	puts postik
# 	puts "Some magic just create a #{ postik.title } with id #{ postik.id }!"
# end
