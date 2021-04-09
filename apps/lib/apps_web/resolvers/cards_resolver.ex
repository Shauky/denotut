defmodule AppsWeb.CardsResolver do
  alias Apps.Cards
  alias Apps.AccountTypes


  def list_cards(%Apps.AccountTypes.User{} = _user, _args, _resolution) do
    {:ok, Cards.list_cards()}

  end


  def all_cards(_root, _args, _info) do
    {:ok, Cards.list_cards()}
  end

  def create_card(_root, args, _info) do
    # TODO: add detailed error message handling later
    case Cards.create_card(args) do
      {:ok, card} ->
        {:ok, card}
      _error ->
        {:error, "could not create card"}
    end
  end
end
