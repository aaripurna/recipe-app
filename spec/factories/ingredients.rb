require 'faker'

FactoryBot.define do
  factory :ingredient do
    name { Faker::Food.ingredient }
    qty { Faker::Food.measurement }
  end
end
