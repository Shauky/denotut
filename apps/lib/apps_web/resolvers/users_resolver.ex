defmodule AppsWeb.UsersResolver do
  alias Apps.AccountTypes

  def find_user(_parent, %{id: id}, _resolution) do
    case Apps.AccountTypes.get_user!(id) do
      nil ->
        {:error, "User ID #{id} not found"}
      _user ->
        {:ok, AccountTypes.get_user!(id)}  
      end
    end

  def all_users(_root, _args, _info) do
    {:ok, AccountTypes.list_users()}
  end

end
