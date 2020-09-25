FactoryBot.define do
  factory :recipe do
    name { Faker::Food.dish }
    description { Faker::Food.description }
    steps { Faker::Lorem.sentences }
  end
end
