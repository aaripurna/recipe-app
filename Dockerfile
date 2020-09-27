FROM ruby:2.6.6

MAINTAINER Nawa Aripurna <nap.aripurna@gmail.com>

ENV INSTALL_PATH /app
RUN mkdir -p $INSTALL_PATH

ARG RAILS_MASTER_KEY

ARG RAILS_ENV

RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg -o /root/yarn-pubkey.gpg && apt-key add /root/yarn-pubkey.gpg
RUN echo "deb https://dl.yarnpkg.com/debian/ stable main" > /etc/apt/sources.list.d/yarn.list
RUN apt-get update && apt-get install -y --no-install-recommends build-essential nodejs yarn \
    libpq-dev libxml2-dev libxslt1-dev libqt4-dev xvfb imagemagick

RUN gem install bundler

WORKDIR /app

COPY . /app

RUN bundle install

RUN bundle exec rake RAILS_ENV=$RAILS_ENV RAILS_MASTER_KEY=$RAILS_MASTER_KEY assets:precompile

VOLUME ["$INSTALL_PATH/public"]

CMD bash ./entrypoint.sh
