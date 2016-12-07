class MoviePolicy < ApplicationPolicy
  class Scope < Scope
    def resolve
      scope.all
    end

    def show?
      true
    end

    def create?
      true
    end

    def new?
      true
    end

  end
end
