FROM ruby:2.7.1

WORKDIR /app
COPY api/Gemfile /app/Gemfile
COPY api/Gemfile.lock /app
COPY api/ /app

RUN apt-get update -qq && apt-get install -y build-essential nodejs libpq-dev postgresql-client
RUN gem install bundler
RUN bundle install
