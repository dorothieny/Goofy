Post.destroy_all
Event.destroy_all
Spot.destroy_all
Category.destroy_all
Type.destroy_all
puts "Destroyed everything you touch"

# Здесь сиды для трюков

posts = [
{
	title: "Олли",
    description: "Базовый трюк , основанный на прыжке и отталкивании доски. Освоив его, вы сможете легко перейти к следующим трюкам. Это база.",
	content: "",
    videos: "3 видео",
    equipment: "не требуется",
    user_id: 1,
    category_id: 1,
    image: File.open(Rails.root.join('public', 'images', 'ollie.gif'))
},
{
    title: "Кикфлип",
    description: "Тут главное хорошенько пнуть доску",
	content: "",
    videos: "4 видео",
    equipment: "не требуется",
    user_id: 1,
    category_id: 1,
    image: File.open(Rails.root.join('public', 'images', 'flip.jpg'))

}
]

# Здесь сиды для спотов

spots = [
    {
        name: "Спот у библиотеки",
        location: "Москва, ул. Бассейная, д. 5",
        image: "Спот у библиотеки",
        metro: "Библиотека им Ленина",
        works: "
        пн-пт  10:00 – 22:00
        сб-вс    9:00 – 00:00",
        price: "Бесплатно",
        user_id: 1,
        type_id: 2,
        image: {},
    }
]

# Здесь сиды для ивентов

 events = [
    {
        name: "Гуляем с Димариком",
        location: "Москва, ул. Бассейная, д.5",
        user_id: 1,
        category_id: 2,
        time: "19:00",
        description: "У Димарика дэрэшка, приходите его поздравить, он будет всем рад. Принесите что-нибудь поесть, можем устроить пикник:)",
        link: "https://t.me/zvukasreda",
        metro: "Библиотека им Ленина",
    }
]

# Здесь сиды для категорий контента "PRO" и "Все"

categories = [
{
    id: 1,
    name: 'PRO',
    description: 'Контент, для тех, кто уже очень хорошо владеет навыком',
    display_in_navbar: 'true'
},
]

# Здесь сиды для типов спотов "PRO" и "Все"

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

spots.each do |spot|
	spotik =Spot.create(spot)
	puts spot
	puts spotik
	puts "Some magic just create a #{ spotik.name } with id #{ spotik.id }!"
end

events.each do |event|
	eventik =Event.create(event)
	puts event
	puts eventik
	puts "Some magic just create a #{ eventik.name } with id #{ eventik.id }!"
end


