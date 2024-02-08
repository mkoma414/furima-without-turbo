class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  PASSWORD_REGEX = /\A(?=.*?[a-z])(?=.*?\d)[a-z\d]+\z/i
  KANJI_REGEX = /\A[ぁ-んァ-ヶ一-龥々ー]+\z/
  KATAKANA_REGEX = /\A[ァ-ヶー－]+\z/
  validates :password, format: { with: PASSWORD_REGEX }
  validates :name, presence: true
  validates :last_name, presence: true
  validates :last_name, format: { with: KANJI_REGEX }
  validates :first_name, presence: true
  validates :first_name, format: { with: KANJI_REGEX }
  validates :last_name_kana, presence: true
  validates :last_name_kana, format: { with: KATAKANA_REGEX }
  validates :first_name_kana, presence: true
  validates :first_name_kana, format: { with: KATAKANA_REGEX }
  validates :birthday, presence: true
end
