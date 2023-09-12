FROM php:8-apache

# Change Apache document root
ENV APACHE_ROOT_DIR /var/www/html
ENV APACHE_DOCUMENT_ROOT ${APACHE_ROOT_DIR}

RUN sed -ri -e 's!/var/www/html!${APACHE_DOCUMENT_ROOT}!g' /etc/apache2/sites-available/*.conf
RUN sed -ri -e 's!/var/www/!${APACHE_DOCUMENT_ROOT}!g' /etc/apache2/apache2.conf /etc/apache2/conf-available/*.conf

# Enable ModRewrite
RUN a2enmod rewrite

# Copy source code
COPY . ${APACHE_ROOT_DIR}
