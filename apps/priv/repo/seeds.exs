# Script for populating the database. You can run it as:
#
#     mix run priv/repo/seeds.exs
#
# Inside the script, you can read and write to any of your
# repositories directly:
#
#     Apps.Repo.insert!(%Apps.SomeSchema{})
#
# We recommend using the bang functions (`insert!`, `update!`
# and so on) as they will fail if something goes wrong.

alias Apps.AccountTypes.User
alias Apps.Repo

%User{id: 1, name: "Another User", email: "second user"} |> Repo.insert!
