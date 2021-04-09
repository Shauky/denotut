defmodule AppsWeb.Schema do
  use Absinthe.Schema
  import_types Absinthe.Type.Custom

  alias AppsWeb.CardsResolver

  alias AppsWeb.UsersResolver

  @desc "A card can have many users"
  object :card do
    field :description, :string
    field :title, :string
    field :deckof, :user
    field :published_at, :naive_datetime
  end


  @desc "A user can have many cards"
  object :user do
    field :email, :string
    field :name, :string
    field :cards, list_of(:card) do
      arg :date, :date
      resolve(&CardsResolver.list_cards/3)
    end
  end


  query do
      @desc "Get all cards"
      field :all_cards, non_null(list_of(non_null(:card))) do
        resolve(&CardsResolver.all_cards/3)
      end

      @desc "Get all users"
      field :all_users, non_null(list_of(non_null(:user))) do
        resolve(&UsersResolver.all_users/3)
      end

      @desc "get a user"
      field :user, :user do
        arg :id, non_null(:id)
        resolve &UsersResolver.find_user/3
      end
    end

  mutation do
    @desc "Create a new card"
    field :create_card, :card do
      arg :id, :id
      arg :title, non_null(:string)
      arg :description, non_null(:string)
      arg :published_at, :naive_datetime

      resolve &CardsResolver.create_card/3
    end
  end
end
