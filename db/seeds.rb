Post.destroy_all
Event.destroy_all
Spot.destroy_all
Category.destroy_all
Type.destroy_all
puts "Destroyed everything you touch"

posts = [
{
	title: "Олли",
    description: "Первый серьезный трюк",
	content: "",
    videos: "3 видео",
    equipment: "не требуется",
    user_id: 1,
    category_id: 1,
    image: File.open(Rails.root.join('public', 'images', 'ollie.jpg'))
},
]

categories = [
{
    id: 1,
    name: 'Все',
    description: 'Контент, подходящий для всех уровней владения скейтом',
    display_in_navbar: 'true'
},
{
    id: 2,
    name: 'PRO',
    description: 'Контент, для тех, кто уже очень хорошо владеет навыком',
    display_in_navbar: 'true'
},
]

types = [
    {
        id: 1,
        name: 'Крытый',
        description: 'Спот, где комфортно в любое время год, потому что у него есть крыша',
        display_in_navbar: 'true'
    },
    {
        id: 2,
        name: 'Открытый',
        description: 'Спот, идеальный для теплого времени года и солнечного дня',
        display_in_navbar: 'true'
    },
]

categories.each do |category|
    cat = Category.create(category)
    puts category
    puts cat
    puts "Some magic just create a #{ cat.name } with id #{ cat.id }!"
end

types.each do |type|
    typ = Type.create(type)
    puts type
    puts typ
    puts "Some magic just create a #{ typ.name } with id #{ typ.id }!"
end

posts.each do |post|
	postik = Post.create(post)
	puts post
	puts postik
	puts "Some magic just create a #{ postik.title } with id #{ postik.id }!"
end

