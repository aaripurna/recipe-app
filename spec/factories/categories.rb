require 'faker'

FactoryBot.define do
  factory :category do
    name { Faker::Superhero.name }
  end
end
