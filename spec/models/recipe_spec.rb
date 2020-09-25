require 'rails_helper'

RSpec.describe Recipe, type: :model do
  describe 'relations' do
    it { should have_many(:ingredients) }
    it { should belong_to(:category) }
  end

  describe 'validation' do
    it { should validate_presence_of(:name) }
    it { should validate_presence_of(:description) }
    it { should validate_presence_of(:steps) }
  end
end
