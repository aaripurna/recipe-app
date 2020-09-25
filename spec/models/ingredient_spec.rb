require 'rails_helper'

RSpec.describe Ingredient, type: :model do
  describe 'relations' do
    it { should belong_to(:recipe) }
  end

  describe 'validation' do
    it { should validate_presence_of(:name) }
    it { should validate_presence_of(:qty) }
  end
end
